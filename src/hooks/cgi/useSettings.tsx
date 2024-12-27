import { useAccountStore } from '@/providers/account';
import { useCallback } from 'react'
//import { useSnackbar } from 'notistack' // Assuming you're using notistack for notifications
//import { useUserStore } from '@/providers/user';

export const useServerSettings = (cgiFetch: any, onSuccess?: (response: any) => void, onError?: (error: any) => void) => {
  //const { enqueueSnackbar } = useSnackbar();

  const { setAccount } = useAccountStore();

  const getServerSettings = useCallback(
    async () => {
   
      try {
        const res = await cgiFetch('/cgi-bin_n/settings.cgi', 'GET', null);
        
        console.log(res)

        if (res) {
          setAccount(res)
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

  return { getServerSettings }
}