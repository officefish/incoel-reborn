import { useNetworkStore } from '@/providers/network';
import { useCallback } from 'react'
//import { useSnackbar } from 'notistack' // Assuming you're using notistack for notifications
//import { useUserStore } from '@/providers/user';

export const useCheckOnline = (cgiFetch: any, onSuccess?: (response: any) => void, onError?: (error: any) => void) => {
  //const { enqueueSnackbar } = useSnackbar();

  const { setStatus } = useNetworkStore();
  
  const checkOnline = useCallback(
    async () => {
   
      try {
        const res = await cgiFetch('/cgi-bin_n/check_online.cgi', 'GET', null);
        
        console.log(res)

        if (res) {
          setStatus(res);
        }

        onSuccess && onSuccess(res);

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

  return { checkOnline }
}