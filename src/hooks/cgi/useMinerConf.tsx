import { useMinerStore } from '@/providers/miner';
import { useCallback } from 'react'
//import { useSnackbar } from 'notistack' // Assuming you're using notistack for notifications
//import { useUserStore } from '@/providers/user';

export const useMinerConf = (cgiFetch: any, onSuccess?: (response: any) => void, onError?: (error: any) => void) => {
  //const { enqueueSnackbar } = useSnackbar();

  const { setMiner } = useMinerStore();

  const minerConf = useCallback(
    async () => {

      try {
        const res = await cgiFetch('/cgi-bin/get_miner_conf.cgi', 'GET', null);
        
        console.log(res)

        if (res) {
          setMiner(res);
        }
        
        onSuccess && onSuccess(res);
        
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

  return { minerConf }
}