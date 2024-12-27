import { IMinerConfig } from "@/types/miner"

export interface IMinerState {
    miner: IMinerConfig
}

export interface IMinerActions {
    setMiner: (miner: IMinerConfig) => void
}
