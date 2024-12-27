import { useCallback } from 'react'
//import { useSnackbar } from 'notistack' // Assuming you're using notistack for notifications
//import { useUserStore } from '@/providers/user';

export const useVersions = (cgiFetch: any, onSuccess?: (response: any) => void, onError?: (error: any) => void) => {
  //const { enqueueSnackbar } = useSnackbar();

  //const { setDailyQuest, setMinigame } = useUserStore();

  const getVersions = useCallback(
    async () => {

      try {
        const res = await cgiFetch('/cgi-bin_n/settings/versions.json', 'GET', null);
        
        if (res) {
            console.log(res)
            onSuccess && onSuccess(res);
        } else {
            //enqueueSnackbar('Failed to fetch stats', { variant: 'error' });
            onError && onError(new Error('Failed to fetch stats'));
        }
        
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

  return { getVersions }
}