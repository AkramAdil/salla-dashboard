import { menuOptions } from "@/libs/constants"
import ar from "@/locales/ar"
import en from "@/locales/en"
import { Globe2 } from "lucide-react"
import { useRouter } from "next/router"

function DropDownMenu() {
  const router = useRouter()
  const {locale}= router
  const t = locale === 'ar' ? ar : en
  return (
    <div className="bg-white absolute top-full right-auto left-0 rounded shadow w-52">
        <ul>
            <li className="text-xs p-2 hover:bg-gray-200 border-t border-t-gray-200">
              <a href={(locale==='ar'?'/en':'/ar')+ router.pathname} className="w-full flex items-center ">
                <Globe2/><span className="ms-1">{locale==='ar'?'English':'العربية'}</span>
              </a>
            </li>
            {menuOptions.map((item) => (
                <li key={item.id} className={`flex items-center text-xs p-2 hover:bg-gray-200 ${item?.className&& item?.className + ' border-t border-t-gray-200'} `}>
                  {item.icon({size:15})}<span className="ms-1">{t[item.title]}</span> 
                </li>
            ))}
            {/*change language */}
        </ul>
    </div>
  )
}

export default DropDownMenu