import React from 'react'
import { FaTrashAlt } from "react-icons/fa"
import "../Display/Display.css"
import "../../App.css"


const DisplayItems = ({item,handleCheck,handleDelete}) => {
  return (
    
    <div className="display-items">
        <div className="left">
            <input
            className='checkBox' 
            type="checkbox" 
            checked={item.checked} 
            onChange={()=>handleCheck(item.id)}
            />
            <p style={(item.checked ? {textDecoration:"line-through"} : null)} onClick={()=>handleCheck(item.id)}>{item.items}</p>
        </div>

        <button 
         onClick={()=>handleDelete(item.id)}
         className='trash'
        >
          <FaTrashAlt />
        </button>
    </div>
  )
}

export default DisplayItems