import React from 'react'
import { NavLink } from 'react-router-dom'
import navLinks from './sideassets/NavLinks'
import "./SideBar.css"

const SideBar = () => {
  return (
    <div className="sidebar">
            <div className="topbar">
                <h1><i class="ri-store-2-line"></i> STORE</h1>
            </div>
            <div className="Menu">
                <ul className="nav">
                        {
                            navLinks.map((item,index)=>(
                                <li className="navItem" key={index}><NavLink to={item.path} className={navClass=>navClass.isActive ? 'nav__active nav__link' : 'nav__link'}><span><i className={item.icon}></i></span>{item.display}</NavLink></li>
                            ))
                        }
                </ul>
                
            </div>
            <div className="logout"><span><i class="ri-logout-box-line"></i>LOGOUT</span></div>
    </div>
  )
}

export default SideBar