import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../pages/home/component/Footer'
import Navbar from '../navbar/component/NavBar'

const Layout = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
