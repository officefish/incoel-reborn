import { useCallback } from 'react'
//import { useSnackbar } from 'notistack' // Assuming you're using notistack for notifications
//import { useUserStore } from '@/providers/user';

export const useChart = (cgiFetch: any, onSuccess?: (response: any) => void, onError?: (error: any) => void) => {
  //const { enqueueSnackbar } = useSnackbar();

  //const { setDailyQuest, setMinigame } = useUserStore();

  const getChart = useCallback(
    async () => {

      try {
        const res = await cgiFetch('/cgi-bin/chart.cgi', 'GET', null);
        
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

  return { getChart }
}