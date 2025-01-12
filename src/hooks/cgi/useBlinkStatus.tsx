import { useCallback } from 'react'
//import { useSnackbar } from 'notistack' // Assuming you're using notistack for notifications
//import { useUserStore } from '@/providers/user';

export const useBlinkStatus = (cgiFetch: any, onSuccess?: (response: any) => void, onError?: (error: any) => void) => {
  //const { enqueueSnackbar } = useSnackbar();

  //const { setDailyQuest, setMinigame } = useUserStore();

  const blinkStatus = useCallback(
    async () => {
   
      try {
        const res = await cgiFetch('/cgi-bin/get_blink_status.cgi', 'GET', null);
        
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

  return { blinkStatus }
}