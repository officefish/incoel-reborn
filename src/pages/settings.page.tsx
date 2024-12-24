import HardwareSettings from "@/widgets/hardware.settings";
import { FC } from "react";
import { useTranslation } from "react-i18next";

const SettingsPage  = () => {

    const { t } = useTranslation(); 
   
    return <section className="flex flex-col items-center justify-center gap-1 w-full">
        <h1>{t('settings.title')}</h1>
        <HardwareSettings />
    </section>
}
export default SettingsPage