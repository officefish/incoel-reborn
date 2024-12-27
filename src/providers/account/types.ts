import { IAccountSettings } from "@/types/settings"

export interface IAccountState {
    account: IAccountSettings
}

export interface IAccountActions {
    setAccount: (account: IAccountSettings) => void
}
