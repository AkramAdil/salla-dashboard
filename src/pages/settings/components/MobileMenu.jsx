import { mobileMenuOptions } from '@/libs/constants'
import ar from '@/locales/ar'
import en from '@/locales/en'
import { Globe2 } from 'lucide-react'
import { useRouter } from 'next/router'
export default function MobileMenu() {
  const router = useRouter()
  const {locale}= router
  const t = locale === 'ar' ? ar : en
  return (
    <div className="bg-primary w-full fixed text-white border-t border-t-gray-900 p-4 sm:hidden justify-between items-center">
        <ul>
            <li className="flex items-center py-2 text-lg">
              <a href={(locale==='ar'?'/en':'/ar')+ router.pathname} className="w-full flex items-center gap-2">
              <Globe2/><span className="ms-1">{locale==='ar'?'English':'العربية'}</span>
              </a>
            </li>
            {
            mobileMenuOptions.map((item) => (
                <li className="flex items-center py-2 text-lg">
                  <a href="#" className="w-full flex items-center gap-2">
                      {item.icon({size: 15})}
                      <span>{t[item.title]}</span>
                  </a>
                </li>
            ))
            }

        </ul>
    </div>
  )
}
