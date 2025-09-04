import React, { useState } from 'react'

import Footer from './footer'
import NavBar from './navbar'
import Sidebar from './sidebar'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div>
      <NavBar onHamburgerClick={() => setSidebarOpen(true)} />
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      <Footer />
    </div>
  )
}
export default Layout