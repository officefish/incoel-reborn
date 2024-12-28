import { FC, PropsWithChildren } from "react"
import { SiteProvider } from "./site"
import { HardwareProvider } from "./settings"
import { MinerProvider } from "./miner"
import { NetworkProvider } from "./network"
import { AccountProvider } from "./account"
import { LogsProvider } from "./logs"

//import {Snackbar} from "@/providers/snackbar.tsx";

const Providers: FC <PropsWithChildren> = ({ children }) => {
    return (
        // <Snackbar>
            <SiteProvider> 
            <HardwareProvider>
            <MinerProvider>
            <NetworkProvider>
            <AccountProvider>
            <LogsProvider>
                {children}
            </LogsProvider>
            </AccountProvider>
            </NetworkProvider>
            </MinerProvider>    
            </HardwareProvider>       
            </SiteProvider>
        // </Snackbar>
    )
}
export default Providers