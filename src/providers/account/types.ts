import { IAccountSettings } from "@/types/settings"

export interface IAccountState {
    account: IAccountSettings
    streamId: string
}

export interface IAccountActions {
    setAccount: (account: IAccountSettings) => void
    setStreamId: (streamId: string) => void
}
