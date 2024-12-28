import { useLogsStore } from "@/providers/logs";
import { cgiFetchNoTimeout } from "@/services/cgi/cgi.fetch.no-timeout";
import { ILog } from "@/types/logs";
import { useCallback, useEffect, useState } from "react";

export const useFetcher = (
  cgiFetch: any, 
  onSuccess?: (response: any) => void, 
  onError?: (error: any) => void) => {

    const { appendLogs } = useLogsStore()
   
    const fetcher = useCallback(
      async (id: string) => {
  
        try {
          const res = await cgiFetch(`/cgi-bin_n/streamer.cgi?id=${id}`, 'GET', null);
          
          console.log(res)

          if(res.logs as ILog[]) {
            appendLogs(res.logs);
          }

          onSuccess && onSuccess(res);
  
        } catch (error: any) {
          //enqueueSnackbar(`Error during allQuestsInfo: ${error}`, { variant: 'error' });
          onError && onError(error);
        } finally {}
      },
      [cgiFetch, 
          //enqueueSnackbar
      ] // Dependencies
    )
  
    return { fetcher }
  }

export function useStreamer<T> (id: string) {

    const [data, setData] = useState<T | null>(null)
    const [error, setError] = useState<Error | null>(null)

    const [longEnabled, setLongEnabled] = useState(false)

    const onSuccess = useCallback(
      (res: T) => {
        setData(res)
    }, [longEnabled])

    const onError = useCallback(
      (err: any) => {
        console.error(err)
        setData(null)
        setError(err)
    }, []);

    const { fetcher } = useFetcher(cgiFetchNoTimeout, onSuccess, onError);
    
    /* Мнговенный повторный вызов в режиме лонг пулинг */
    useEffect(() => { 
        if (longEnabled) {
            fetcher(id)
        } 
    }, [data]);

    /* Отложенный вызов (через 10 секунд) при ошибке */
    useEffect(() => {
      const handler = setTimeout(() => {
        if (error) {
          fetcher(id)
        }
      }, 10_000)// 10 seconds
      return () => {
        clearTimeout(handler)
      }
    }, [error])

    const handler = () => fetcher(id)
    
    return { handler, data, longEnabled, setLongEnabled }
  }
