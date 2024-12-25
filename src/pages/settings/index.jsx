import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import MobileMenu from './components/MobileMenu'
import MobileHeader from './components/header/MobileHeader'
import SettingsContetnt from './components/content/SettingsContetnt'

export default function index() {
  const [sidebarExpanded, setSidebarExpanded] = useState(false)
  const [mobuileMenuExpanded, setMobileMenuExpanded] = useState(false)
  return (
    <>
    <div className="sm:flex h-full relative">
      {/* Mobile header */}
      <MobileHeader sidebarExpanded={sidebarExpanded} setSidebarExpanded={setSidebarExpanded} mobuileMenuExpanded={mobuileMenuExpanded} setMobileMenuExpanded={setMobileMenuExpanded}/>
      {/* Mobile menu */}
      {mobuileMenuExpanded&&<MobileMenu/>}
      {/* Sidebar */}
        <Navbar expanded={sidebarExpanded}/>
      {/* Main content */}
      <div className="w-full flex-1">
        <Header/>
        <main className="p-4"> 
          <SettingsContetnt/>
        </main>
      </div>
    </div>
    </>
  )
}