import React from 'react'
import './OrderList.css'
const OrderList = () => {
  return (
    <div className="mainRes">
         <div className="form">
          <div className="title">
            <h1>Order List</h1>
          </div>
          <div className="element">
            <div className="nameE"><p>Projecteur</p></div>
            <div className="accName"><h1>Azer Idoudi</h1></div>
            <div className="decline"><button>Decline</button></div>
            <div className="accept"><button>Accept</button></div>
          </div>
          </div>
        </div>
  )
}

export default OrderList