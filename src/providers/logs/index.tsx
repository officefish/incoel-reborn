import { FC, PropsWithChildren, useRef, useContext } from 'react'
import { createStore, StoreApi, useStore } from 'zustand'
import { createContext } from 'react' // from 'zustand/context'
import { ILogsState, ILogsActions } from './types'
import { ILog } from '@/types/logs'

type ILogsStore = ILogsState & ILogsActions

const createLogsStore = () =>
  createStore<ILogsStore>()((set) => ({
    logs: [],
    appendLogs: (logs: ILog[]) => set(() => ({ ...logs, logs })), 
}))

  
  type Store = ReturnType<typeof createLogsStore>
  const LogsContext = createContext<Store | null>(null)

  export const useLogsStore = () => {
    const api = useContext(LogsContext) as StoreApi<ILogsStore>
    return {
      logs: useStore(api, (state) => state.logs),
      appendLogs: useStore(api, (state) => state.appendLogs),
    }
  }

  export const LogsProvider: FC<PropsWithChildren> = ({ children }) => {
    const userRef = useRef<Store>()
    if (!userRef.current) {
      userRef.current = createLogsStore()
    }
    return (
      <LogsContext.Provider value={userRef.current}>
        {children}
      </LogsContext.Provider>
    )
  }