import ar from '@/locales/ar'
import en from '@/locales/en'
import { ChevronDown, Home, LifeBuoy } from 'lucide-react'
import { useRouter } from 'next/router'
function Breadcrumbing() {
  const router = useRouter()
  const {locale}= router
  const t = locale === 'ar' ? ar : en
  return (

    <>
        <div className="flex justify-between">
            <span className='text-sm flex items-center gap-2'>
                <span className="text-primary flex items-center"><Home/> {t['home']} / </span>
                <span className="text-gray-500">{t.settings}</span>
            </span>
            <span className='flex bg-secondary text-primary p-1 rounded-full gap-2 items-center text-sm'>
                <LifeBuoy/>
                {t.help} 
                <ChevronDown/>
            </span>
        </div>
    </>
  )
}

export default Breadcrumbing