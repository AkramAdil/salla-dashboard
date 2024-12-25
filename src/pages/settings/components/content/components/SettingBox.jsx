import ar from "@/locales/ar"
import en from "@/locales/en"
import { useRouter } from "next/router"

function SettingBox({setting}) {
    const router = useRouter()
    const {locale}= router
    const t = locale === 'ar' ? ar : en
  return (
    <div className=" group p-6 rounded border border-gray-200 flex flex-col gap-4 justify-center items-center hover:cursor-pointer">
        {setting.icon({size: 35,color:'#76e8cd'})}
        <span className="text-md text-gray-500 font-bold group-hover:text-primary transition-all">{t[setting.title]['title']}</span>
        <span className="text-sm text-gray-400">{t[setting.title]['subtitle']}</span>
    </div>
  )
}

export default SettingBox