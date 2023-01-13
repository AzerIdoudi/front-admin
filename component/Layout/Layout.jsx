import React from 'react'
import Router from "../../Routes/Router"
import SideBar from '../SideBar/SideBar'
import TopNav from '../TopNav/TopNav'
const Layout = () => {
  return (
    <div className="page">
        <SideBar/>
        <div className="mainLayout">
            <TopNav/>
            <div className="content">
                <Router/>
            </div>
        </div>
    </div>
  )
}

export default Layout