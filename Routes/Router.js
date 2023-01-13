import React from 'react'
import {Routes,Route, Navigate} from "react-router-dom";
import Home from "../Pages/Home"
import List from "../Pages/List"
import Reserved from "../Pages/Reserved"
import OrderList from "../Pages/OrderList"
import AccountList from "../Pages/AccountList"
import Add from "../Pages/Add"

const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/Home' element={<Home/>} />}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/List' element={<List/>}/>
        <Route path='/Reserved' element={<Reserved/>}/>
        <Route path='/OrderList' element={<OrderList/>}/>
        <Route path='/AccountList' element={<AccountList/>}/>
        <Route path='/Add' element={<Add/>}/>
    </Routes>
  )
}

export default Router