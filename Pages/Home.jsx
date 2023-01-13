import React from 'react'
import "./Home.css"
import List from './List'
import Reserved from './Reserved'

const Home = () => {
  return (
    <div className="mainHome">
      <div className="cards">
        <div className="c1">
          <i class="ri-mac-line"></i>
          <p id='c1'>350</p>
          <span className="par"><>Equipment in the Institute</></span>
        </div>
        <div className="c2">
        <i class="ri-briefcase-2-fill"></i>
          <p id='c2'>50</p>
          <span className="par"><>Professor in the Institute</></span>
        </div>
        <div className="c3">
        <i class="ri-user-2-fill"></i>
          <p id='c3'>300</p>
          <span className="par"><>Worker in the Institute store</></span>
        </div>
        <div className="c4">
          <i class="ri-mac-line"></i>
          <p id='c4'>129</p>
          <span className="par"><>Available Equipment</></span>
        </div>
      </div>
      <div className="list">
        <List/>
      </div>
      <div className="Reserved">
        <Reserved/>
      </div>

    </div>
  )
}

export default Home