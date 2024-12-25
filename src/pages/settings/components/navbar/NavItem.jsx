import ar from "@/locales/ar"
import en from "@/locales/en"
import { useRouter } from "next/router"

function NavItem({item}) {
    const router = useRouter()
    const {locale}= router
    const t = locale === 'ar' ? ar : en
  return (
    <li key={item.id} className="flex items-center justify-between p-4 text-lg hover:bg-primarydark">
        <a href={item.path} className="flex items-center w-full">
        <span className="flex items-center">{item.icon} {t[item.title]}</span>
        </a>
    </li>
  )
}

export default NavItem