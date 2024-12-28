import { cgiFetchNoTimeout } from "@/services/cgi/cgi.fetch.no-timeout";
import { useCallback, useEffect, useState } from "react";



export const useFetcher = (cgiFetch: any, onSuccess?: (response: any) => void, onError?: (error: any) => void) => {
    //const { enqueueSnackbar } = useSnackbar();
  
    //const { setDailyQuest, setMinigame } = useUserStore();
  
    const fetcher = useCallback(
      async (id: string) => {
  
        try {
          const res = await cgiFetch(`/cgi-bin_n/streamer.cgi?id=${id}`, 'GET', null);
          
          console.log(res)
  
          onSuccess && onSuccess(res);
  
          // if (res.dailyReward) {
          //     setDailyQuest(res.dailyReward);
          // }
  
          // if (res.minigame) {
          //     setMinigame(res.minigame);
          // }
          
        } catch (error: any) {
          //enqueueSnackbar(`Error during allQuestsInfo: ${error}`, { variant: 'error' });
          onError && onError(error);
        } finally {
          
        }
      },
      [
          cgiFetch, 
          //enqueueSnackbar
      ] // Dependencies
    )
  
    return { fetcher }
  }

export function useStreamer<T> (id: string) {

    const [data, setData] = useState<T | null>(null)
    const [longEnabled, setLongEnabled] = useState(false)

    const onSuccess = useCallback(
      (res: T) => {
        setData(res)
    }, [longEnabled])

    const onError = useCallback(
      (err: any) => {
        console.error(err)
        setData(null)
    }, []);

    const { fetcher } = useFetcher(cgiFetchNoTimeout, onSuccess, onError);
    
    useEffect(() => { 
        if (longEnabled) {
            fetcher(id)
        } 
    }, [data]);

    const handler = () => {
        fetcher(id)
    }

    return { handler, data, longEnabled, setLongEnabled }
  }
