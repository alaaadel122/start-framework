import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import CopyRight from './CopyRight'

export default function Layout() {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: '90px' }}>
        <Outlet />
      </div>
      <Footer />
      <CopyRight />
    </>
  )
}
