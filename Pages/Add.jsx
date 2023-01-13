import React from 'react'
import './add.css'
const Add = () => {
  return (
    <div className="mainList">
     <div className="form">
      <div className="title">
        <h1>Add equipments</h1>
      </div>
      <div className="element">
        <div className="Qt">
            <p>Quantity</p>
            <input type="text" id="AddQ"/></div>
        <div className="Name"><p>Equipment Name</p><input type="text" id="AddN"/></div>
        <div className="Add"><button>Add</button></div>
      </div>
      </div> 
    </div>
  )
}

export default Add