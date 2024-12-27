import { FC, PropsWithChildren, useRef, useContext } from 'react'
import { createStore, StoreApi, useStore } from 'zustand'
import { createContext } from 'react' // from 'zustand/context'
import { INetworkState, INetworkActions } from './types'
import { INetwork, INetworkStatus } from '@/types/network'

type INetworkStore = INetworkState & INetworkActions

const DefaultNetwork = {
    "nettype": "Static",
    "netdevice": "eth0",
    "macaddr": "EA:F0:B4:B7:6D:16",
    "ipaddress": "172.16.10.119",
    "netmask": "255.255.255.0",
    "conf_nettype": "Static",
    "conf_hostname": "",
    "conf_ipaddress": "",
    "conf_netmask": "",
    "conf_gateway": "",
    "conf_dnsservers": ""
}

const DefaultStatus = {
    "auto_tuner": {
        "Working":false,
        "HasLastLog": false,
        "CurrentValue": 0,
        "SavedValue": 0
    },
    online: true,
    "full_uptime": 276547
}

const createNetworkStore = () =>
  createStore<INetworkStore>()((set) => ({
    network: DefaultNetwork,
    setNetwork: (network: INetwork) => set(() => ({ network })),
    status: DefaultStatus,
    setStatus: (status: INetworkStatus) => set(() => ({ status })),
  }))

  type Store = ReturnType<typeof createNetworkStore>
  const NetworkContext = createContext<Store | null>(null)

  export const useNetworkStore = () => {
    const api = useContext(NetworkContext) as StoreApi<INetworkStore>
    return {
      network: useStore(api, (state) => state.network),
      setNetwork: useStore(api, (state) => state.setNetwork),
      status: useStore(api, (state) => state.status),
      setStatus: useStore(api, (state) => state.setStatus),
    }
  }

  export const NetworkProvider: FC<PropsWithChildren> = ({ children }) => {
    const userRef = useRef<Store>()
    if (!userRef.current) {
      userRef.current = createNetworkStore()
    }
    return (
      <NetworkContext.Provider value={userRef.current}>
        {children}
      </NetworkContext.Provider>
    )
  }