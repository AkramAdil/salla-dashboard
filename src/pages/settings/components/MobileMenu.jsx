import { mobileMenuOptions } from '@/libs/constants'
import ar from '@/locales/ar'
import en from '@/locales/en'
import { useRouter } from 'next/router'
export default function MobileMenu() {
  const router = useRouter()
  const {locale}= router
  const t = locale === 'ar' ? ar : en
  return (
    <div className="bg-primary w-full fixed text-white border-t border-t-gray-900 p-4 sm:hidden justify-between items-center">
        <ul>
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
