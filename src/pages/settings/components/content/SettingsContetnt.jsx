import { settingsOptions } from "@/libs/constants"
import Breadcrumbing from "./components/Breadcrumbing"
import SettingBox from "./components/SettingBox"
import { useRouter } from "next/router"
import ar from "@/locales/ar"
import en from "@/locales/en"

function SettingsContetnt() {
  const router = useRouter()
  const {locale}= router
  const t = locale === 'ar' ? ar : en
  return (
    <>
        <Breadcrumbing/>
        {
          settingsOptions.map(option=>
            <>
              <h1 key={option.id} className="text-gray-500 text-xl pt-4">{t[option.title]}</h1>
              <div className="grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-8">
                {
                  option?.settings.map(setting=>
                    <SettingBox key={setting.id} setting={setting}/>
                  )
                }
              </div>
            </>
          )
        }
    </>
  )
}

export default SettingsContetnt