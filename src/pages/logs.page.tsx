//import HardwareSettings from "@/widgets/hardware.settings";
import { useLogsStore } from "@/providers/logs";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import ReactJson from "react-json-view";

const LogsPage:FC = () => {

    const { t } = useTranslation(); 

    const { logs } = useLogsStore()
   
    return <section className="mt-12">
        <h1>{t('logs.title')}</h1>
        {/* <HardwareSettings /> */}
        <div className="mt-8">
            <h2 className="mb-8">{t('logs.flow')}</h2>
            <ReactJson src={logs} />
        </div>
    </section>
}
export default LogsPage