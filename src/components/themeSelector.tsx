import { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const ThemeSelector: FC  = () => {

  const [theme, setTheme] = useState('light')

  const {t} = useTranslation()
  
  useEffect(() => {
      document.querySelector('html')?.setAttribute('data-theme', theme)
    }, [theme])

  const themes = ['light', 'dark', 'lofi', 'night', 'cyberpunk', 'winter']

  return (
   
    <div className='dropdown'>
        <label tabIndex={0} className="btn m-1">{t('additional.theme')}: {theme}</label>
          <ul tabIndex={0} className='dropdown-content menu p-2 shadow bg-base-100 rounded-box'>
            {themes.map((t) => (
                <li key={t}>
                  <button onClick={() => {setTheme(t)}}>{t}</button>
                </li>
              ))}
          </ul>
    </div>
  )
}
export default ThemeSelector