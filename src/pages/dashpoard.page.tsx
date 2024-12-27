import { FC, useState } from "react";
import { useTranslation } from "react-i18next";

const DashboardPage: FC  = () => {
   
    const { t } = useTranslation(); 

    const eventSource = new EventSource('http://172.16.10.119/cgi-bin/sse.cgi');

    const [messages, setMessages] = useState<string[]>([]);

    eventSource.onmessage = function(event) {
        const msg =`Message: ${event.data}`;
        console.log(msg);   
        setMessages(prevMessages => [...prevMessages, msg]);
    };
    
    eventSource.onerror = function() {
        console.error("Error with SSE connection");
        eventSource.close();
    };
       
    return <section className="flex flex-row items-center justify-center gap-1 w-full">
        <h1>{t('dashboard.title')}</h1>

       {
        messages.map(msg => <p key={msg}>{msg}</p>)
       }


    </section>
}
export default DashboardPage