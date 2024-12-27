//import HardwareSettings from "@/widgets/hardware.settings";
import { useMinerStore } from "@/providers/miner";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import ReactJson from "react-json-view";

const SettingsPage:FC = () => {

    const { t } = useTranslation(); 

    const { miner } = useMinerStore()
   
    return <section className="mt-12">
        <h1>{t('settings.title')}</h1>
        {/* <HardwareSettings /> */}
        <div className="mt-8">
            <h2 className="mb-8">{t('settings.miner_config')}</h2>
            <ReactJson src={miner} />
        </div>
    </section>
}
export default SettingsPage