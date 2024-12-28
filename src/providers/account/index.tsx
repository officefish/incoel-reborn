import { FC, PropsWithChildren, useRef, useContext } from 'react'
import { createStore, StoreApi, useStore } from 'zustand'
import { createContext } from 'react' // from 'zustand/context'
import { IAccountActions, IAccountState } from './types'
import { IAccountSettings } from '@/types/settings'

type IAccountStore = IAccountState & IAccountActions

const DefaultAccount = {
    "cgi": true,
    "autoupgrade": true,
    "auto_tuner_tool": true,
    "iautot_exists": true,
    "license": {
        "period": false,
        "period_end": "",
        "period_start":"",
    },
    "license_key": "",
    "freq_level":[]
}
const createAccountStore = () =>
  createStore<IAccountStore>()((set) => ({
    account: DefaultAccount,
    setAccount: (account: IAccountSettings) => set(() => ({ account })),
    streamId: "1",
    setStreamId: (streamId: string) => set(() => ({ streamId })),
    
  }))

  type Store = ReturnType<typeof createAccountStore>
  const AccountContext = createContext<Store | null>(null)

  export const useAccountStore = () => {
    const api = useContext(AccountContext) as StoreApi<IAccountStore>
    return {
      account: useStore(api, (state) => state.account),
      setAccount: useStore(api, (state) => state.setAccount),
      streamId: useStore(api, (state) => state.streamId),
      setStreamId: useStore(api, (state) => state.setStreamId),
    }
  }

  export const AccountProvider: FC<PropsWithChildren> = ({ children }) => {
    const userRef = useRef<Store>()
    if (!userRef.current) {
      userRef.current = createAccountStore()
    }
    return (
      <AccountContext.Provider value={userRef.current}>
        {children}
      </AccountContext.Provider>
    )
  }