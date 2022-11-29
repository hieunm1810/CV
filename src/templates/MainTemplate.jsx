import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import SiderBar from '../components/SiderBar/SiderBar'

export default function MainTemplate(props) {
  return (
    <div className="wrapper container d-flex align-items-start">
        <SiderBar />
        <div className="content">
            <Header />
            <Outlet />
            <Footer />
        </div>
    </div>
  )
}
