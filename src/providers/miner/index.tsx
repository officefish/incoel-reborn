import { FC, PropsWithChildren, useRef, useContext } from 'react'
import { createStore, StoreApi, useStore } from 'zustand'
import { createContext } from 'react' // from 'zustand/context'
import { IMinerState, IMinerActions } from './types'
import { IMinerConfig } from '@/types/miner'

type IMinerStore = IMinerState & IMinerActions

const DefaultMiner = {
    "api-listen": true,
    "api-network": true,
    "api-groups": "A:stats:pools:devs:summary:version",
    "api-allow": "A:0/0,W:*",
    "bitmain-fan-ctrl": true,
    "bitmain-fan-pwm": "100",
    "bitmain-use-vil": true,
    "bitmain-freq": "300",
    "bitmain-voltage": "950",
    pools: []
}

const createMinerStore = () =>
  createStore<IMinerStore>()((set) => ({
    miner: DefaultMiner,
    setMiner: (miner: IMinerConfig) => set(() => ({ miner })),
  }))

  type Store = ReturnType<typeof createMinerStore>
  const MinerContext = createContext<Store | null>(null)

  export const useMinerStore = () => {
    const api = useContext(MinerContext) as StoreApi<IMinerStore>
    return {
      miner: useStore(api, (state) => state.miner),
      setMiner: useStore(api, (state) => state.setMiner),
    }
  }

  export const MinerProvider: FC<PropsWithChildren> = ({ children }) => {
    const userRef = useRef<Store>()
    if (!userRef.current) {
      userRef.current = createMinerStore()
    }
    return (
      <MinerContext.Provider value={userRef.current}>
        {children}
      </MinerContext.Provider>
    )
  }