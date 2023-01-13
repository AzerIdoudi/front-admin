import React from 'react'
import './List.css'
const List = () => {
  return (
    <div className="mainList">
     <div className="form">
      <div className="title">
        <h1>Equipments</h1>
      </div>
      <div className="element">
        <div className="qt"><p id='0'>50</p></div>
        <div className="nameE"><p>Projecteur</p></div>
        <div className="av"><h1>AVAILABLE</h1></div>
        <div className="request"><button>ORDER</button></div>
      </div>
      </div> 
    </div>
  )
}

export default List