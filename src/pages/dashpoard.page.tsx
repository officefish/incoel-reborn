import { FC } from "react";
import { useTranslation } from "react-i18next";

const DashboardPage: FC  = () => {
   
    const { t } = useTranslation(); 
       
    return <section className="flex flex-row items-center justify-center gap-1 w-full">
        <h1>{t('dashboard.title')}</h1>
    </section>
}
export default DashboardPage