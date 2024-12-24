import { FC } from "react";
import { useTranslation } from "react-i18next";
import {supportedLngs} from "@/i18n/config";


const LanguageSelector: FC  = () => {

    const {i18n, t} = useTranslation();
  
    const handleChangeLang = (code: string) => {
      i18n.changeLanguage(code)
    }

  return (
   
    <div className='dropdown'>
      <label tabIndex={0} className="btn m-1">{t('additional.language')}: {i18n.resolvedLanguage}</label>
      <ul tabIndex={0} className='dropdown-content menu p-2 shadow bg-base-100 rounded-box'>
        {Object.entries(supportedLngs).map(([code]) => (
          <li key={code}>
            <button onClick={() => handleChangeLang(code)}>{code}</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default LanguageSelector