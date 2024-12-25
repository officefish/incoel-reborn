import { FC } from "react";
import { useTranslation } from "react-i18next";

const LongPoolingPage: FC  = () => {
   
    const { t } = useTranslation(); 
       
    return <section className="flex flex-row items-center justify-center gap-1 w-full">
        <h1>{t('long_pooling.title')}</h1>
    </section>
}
export default LongPoolingPage