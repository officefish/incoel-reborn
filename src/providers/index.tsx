import { FC, PropsWithChildren } from "react"
import { SiteProvider } from "./site"

//import {Snackbar} from "@/providers/snackbar.tsx";

const Providers: FC <PropsWithChildren> = ({ children }) => {
    return (
        // <Snackbar>
            <SiteProvider>    
                {children}
            </SiteProvider>
        // </Snackbar>
    )
}
export default Providers