import { Link } from "react-router-dom"
import { useSiteStore } from "@/providers/site";
import { Page } from "@/types"
import {FC, 
    //useEffect, 
    //useState
} from "react";
import { useTranslation } from "react-i18next";
//import { useLocationStore } from "@/providers/location";

const Navigation: FC = () => {

  const { page, isEmptyPage } = useSiteStore()
  const { t } = useTranslation();

  //const getIsNotification = (page: Page) => !!pageNotifications.find((value) => value === page)

    return <div className={`
    ${isEmptyPage ? 'hidden' : ''}
    flex flex-row items-center justify-evenly w-full
    `}>
      <NavButton selected={page === Page.DASHBOARD} to={'/'} title={t('navigation.dashboard')} index={0}/> 
      <NavButton selected={page === Page.SETTINGS} to={'/settings'} title={t('navigation.settings')} index={1}/>
      <NavButton selected={page === Page.LONG_POOLING} to={'/long-pooling'} title={t('navigation.long_pooling')} index={2}/>
      <NavButton selected={page === Page.LOGS} to={'/logs'} title={t('navigation.logs')} index={3}/>
    </div>
}
export default Navigation

interface INavButton {
  selected: boolean
  title: string
  to: string
  index: number
}

const NavButton:FC<INavButton> = (props) => {
    const { selected, to, title } = props

    // const svgByIndex = (index: number) => {
    //     switch(index) {
    //         case 0: return <img className="w-12 h-12" src="/nav/secret.png" alt="secret" />
    //         case 1: return <img className="w-12 h-12" src="/nav/room.png" alt="room" />
    //         case 2: return <img className="w-12 h-12" src="/nav/sphere.png" alt="sphere" />
    //         case 3: return <img className="w-12 h-12" src="/nav/tasks.png" alt="tasks" />
    //         case 4: return <img className="w-12 h-12" src="/nav/friends-2.png" alt="friends" />
    //     }
    // }

    return (
        <Link to={to}>
            <div className={`
                w-full h-full flex items-center justify-center flex-col
                nav-item
                py-1
                ${selected ? 'nav-select' : ''}
                `
            }>
                <div className={`
                    w-15 h-15 flex items-center justify-between flex-col gap-1
                    `}>
                    {/* {svgByIndex(index)} */}
                    {title}
                </div >
            </div>
        </Link>

    )
}