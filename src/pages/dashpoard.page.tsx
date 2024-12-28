import { useAccountStore } from "@/providers/account";
import { useNetworkStore } from "@/providers/network";
import { FC, 
    //useState 
} from "react";
import { useTranslation } from "react-i18next";
import ReactJson from "react-json-view";

const DashboardPage: FC  = () => {
   
    const { t } = useTranslation(); 

    // const eventSource = new EventSource('http://172.16.10.119/cgi-bin/sse.cgi');

    // const [messages, setMessages] = useState<string[]>([]);

    // eventSource.onmessage = function(event) {
    //     const msg =`Message: ${event.data}`;
    //     console.log(msg);   
    //     setMessages(prevMessages => [...prevMessages, msg]);
    // };
    
    // eventSource.onerror = function() {
    //     console.error("Error with SSE connection");
    //     eventSource.close();
    // };

    const { account } = useAccountStore()
    const { network } = useNetworkStore()
       
    return <section className="mt-12">
        <h1>{t('dashboard.title')}</h1>

         <div className="">
            <h2 className="my-8">{t('settings.account')}</h2>
            <ReactJson src={account} />
            <h2 className="my-8">{t('settings.network')}</h2>
            <ReactJson src={network} />
        </div>

       {/* {
        messages.map(msg => <p key={msg}>{msg}</p>)
       } */}
       
    </section>
}
export default DashboardPage