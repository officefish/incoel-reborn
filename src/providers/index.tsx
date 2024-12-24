import { FC, PropsWithChildren } from "react"
import { SiteProvider } from "./site"
import { HardwareProvider } from "./settings"

//import {Snackbar} from "@/providers/snackbar.tsx";

const Providers: FC <PropsWithChildren> = ({ children }) => {
    return (
        // <Snackbar>
            <SiteProvider> 
            <HardwareProvider>
                {children}
            </HardwareProvider>       
            </SiteProvider>
        // </Snackbar>
    )
}
export default Providers