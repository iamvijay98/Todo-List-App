import React from 'react'
import "../Footer/Footer.css"
import "../../App.css"

const Footer = ({listItems}) => {
  return (
    <div className='footer'>
        <p>Total {listItems.length === 1 ? "List" : "Lists"} : {listItems.length}</p>
    </div>
  )
}

export default Footer