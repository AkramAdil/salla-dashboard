import Avatar from '@/components/avatar'
import { ChevronDown, Gift, Moon } from 'lucide-react'
import React, { useState } from 'react'
import SearchBar from './SearchBar'
import DropDownMenu from './DropDownMenu'
import { useRouter } from 'next/router'
import ar from '@/locales/ar'
import en from '@/locales/en'

function Header() {
    const [menuExpanded, setMenuExpanded] = useState(false)
    const router = useRouter()
    const {locale}= router
    const t = locale === 'ar' ? ar : en
    return (
    <div className="flex justify-between p-3 items-center bg-gray-100">
        <SearchBar/>
        <div className="items-center hidden gap-6 sm:flex relative">
            {/* gift icon */}
            <div className="border rounded-full border-secondary p-2">
                <Gift color='#003842'/>
            </div>
            {/* dark icon */}
            <div className="border rounded-full border-secondary p-2">
                <Moon color='#003842'/>
            </div>
            {/* system updates */}
            <a href='#' className="relative">
                {t.platform_updates}
                <span className="absolute flex h-3 w-3 top-3 -right-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
            </a>
            {/* user profile dropdown */}
            <div className="relative">
                <div className="flex items-center hover:cursor-pointer" onClick={()=>setMenuExpanded(!menuExpanded)} data-toggle="dropdown" aria-expanded="false">
                    <Avatar src="/avatar.png" alt="profile" width={40} height={40} />
                    <span className='mr-2 text-gray-500'>{t.gift_store}</span>
                    <ChevronDown color='#6b7280'/>
                </div>
                {menuExpanded&&<DropDownMenu/>}
            </div>
        </div>
    </div>
)}

export default Header