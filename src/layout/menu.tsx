import LanguageSelector from "@/components/languageSelector";
import ThemeSelector from "@/components/themeSelector";
import { FC } from "react";

const Menu: FC  = () => {
   
    return <section className="flex flex-row items-center justify-center gap-1 w-[200px]">
       <div className="absolute top-5 right-10 flex flex-row items-center justify-center gap-1">
         <LanguageSelector />
         <ThemeSelector />
       </div>
       
    </section>
}
export default Menu