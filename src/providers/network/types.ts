import { INetwork, INetworkStatus } from "@/types/network"

export interface INetworkState {
    network: INetwork
    status: INetworkStatus
}

export interface INetworkActions {
    setNetwork: (network: INetwork) => void
    setStatus: (status: INetworkStatus) => void
}
