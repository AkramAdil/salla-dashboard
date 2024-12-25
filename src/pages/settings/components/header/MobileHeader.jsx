import Avatar from '@/components/avatar'
import Image from 'next/image'
import React from 'react'

function MobileHeader({sidebarExpanded, setSidebarExpanded, mobuileMenuExpanded, setMobileMenuExpanded}) {
  return (
    <div className="bg-primary text-white p-4 flex sm:hidden justify-between items-center">
          <div className='md:hidden hover:cursor-pointer' onClick={() => setSidebarExpanded(!sidebarExpanded)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </div>
          <div>
            <div className="">
              <Image src="/logo.svg" alt="logo" width={90} height={40} />
            </div>
          </div>
          <Avatar src="/avatar.png" alt="profile" setExpanded={setMobileMenuExpanded} menuExpanded={mobuileMenuExpanded}  width={40} height={40} />
      </div>
  )
}

export default MobileHeader