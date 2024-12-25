import { sidebarItems } from '@/libs/constants'
import ar from '@/locales/ar'
import en from '@/locales/en'
import { ChevronLeft, Crown, Share2 } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import NavItem from './NavItem'
function Navbar({expanded}) {
  const router = useRouter()
  const {locale}= router
  const t = locale === 'ar' ? ar : en
  return (
    <aside className={`box-border overflow-y-scroll h-screen fixed sm:sticky top-17 sm:top-0 bg-primary transition-all duration-300 ${ expanded ? 'sm:w-64 w-2/3' : 'sm:w-64 w-0'}`}>
        <a href="#">
          <Image src={'/logo.svg'} alt="logo" width={90} height={40} className='hidden sm:block p-2'/>
        </a>
        <div className="p-5">
          <div className="flex flex-col items-center justify-between p-4">
            <div className="flex items-center relative">
              <div className="overflow-hidden rounded-full w-16 h-16 border-2 border-dashed border-amber-400">
                <Image
                  src="/store.jpg"
                  alt="store"
                  width={60}
                  height={60}
                  className="object-cover w-full h-full"
                />
              </div>
              <span className="bg-amber-400 absolute flex items-center px-3 py-0.5 -top-4 right-1/2 translate-x-1/2 text-sm rounded-full">
                <Crown size={15} />
                سبيشل
              </span>
            </div>
            <p className="text-white">{t.gift_store}</p>
          </div>
        </div>
        <span className="justify-center flex">
          <span className="text-white border border-secondary border-e-0 rounded-full px-1 pe-0 flex items-center">
              {t.visit} <ChevronLeft size={15}/>
              <span className='bg-secondary rounded-e-full py-2 ps-2'><Share2 color='#00414d' size={15}/></span>
          </span>
        </span>
        <nav className="flex h-full flex-col shadow-sm">
          <ul className="text-white">
            {sidebarItems.map((item) =>
              item?.type === 'submenu' ? (
                <>
                  {/*pareent item */}
                  <li key={item.id} className="flex items-center justify-between p-4 text-lg text-primarylight">
                    <span>{t[item.title]}</span>
                  </li>
                  {/*child items */}
                  {item.submenu.map((subitem) => (
                    <NavItem key={subitem.id} item={subitem} />
                  ))}
                </>
              ) : (
                <NavItem item={item} />
              )
            )}
          </ul>
        </nav>
    </aside>
  )
}

export default Navbar
