import { useNetworkStore } from '@/providers/network';
import { useCallback } from 'react'
//import { useSnackbar } from 'notistack' // Assuming you're using notistack for notifications
//import { useUserStore } from '@/providers/user';

export const useNetworkInfo = (cgiFetch: any, onSuccess?: (response: any) => void, onError?: (error: any) => void) => {
  //const { enqueueSnackbar } = useSnackbar();

  const { setNetwork } = useNetworkStore();

  const networkInfo = useCallback(
    async () => {
   
      try {
        const res = await cgiFetch('/cgi-bin/get_network_info.cgi', 'GET', null);
        
        console.log(res)

        if (res) {
          setNetwork(res);
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

  return { networkInfo }
}