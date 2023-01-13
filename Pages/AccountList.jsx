import React from 'react'
import './AccountList.css'
import Select from 'react-select'
const AccountList = () => {
    const Role = [
        { value: '1', label: 'Directeur' },
        { value: '2', label: 'Magasigner' },
        { value: '3', label: 'Tecneicien' },
        { value: '4', label: 'Professeur' }
      ]
  return (
    <div className="mainRes">
         <div className="form">
          <div className="title">
            <h1>Accounts List</h1>
          </div>
          <div className="element">
            <div className="nameE"><p>Azer Idoudi</p></div>
            <div className="accId"><h1>1</h1></div>
            <div className="role"><Select options={Role}/></div>
            <div className="modify"><button>Modify</button></div>
          </div>
          </div>
        </div>
  )
}

export default AccountList