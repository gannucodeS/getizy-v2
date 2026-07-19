import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Topbar from '../components/Topbar.jsx'
import Header from '../components/Header.jsx'
import MobileNav from '../components/MobileNav.jsx'
import SearchPopup from '../components/SearchPopup.jsx'
import Footer from '../components/Footer.jsx'
import ScrollToTop from '../components/ScrollToTop.jsx'

export default function Layout() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <>
      <div className="page-wrapper">
        <Topbar />
        <Header
          onOpenMobileNav={() => setMobileNavOpen(true)}
          onOpenSearch={() => setSearchOpen(true)}
        />
        <main>
          <Outlet />
        </main>
        <Footer />

        <MobileNav open={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />
      </div>
      <SearchPopup open={searchOpen} onClose={() => setSearchOpen(false)} />
      <ScrollToTop />
    </>
  )
}
