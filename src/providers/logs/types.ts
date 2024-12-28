import { ILog } from "@/types/logs"

export interface ILogsState {
    logs: ILog[]
}

export interface ILogsActions {
    appendLogs: (logs: ILog[]) => void
}