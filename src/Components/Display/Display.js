import React from 'react'
import "../Display/Display.css"
import DisplayItems from './DisplayItems'
import "../../App.css"

const Display = ({listItems,handleCheck,handleDelete}) => {
  return (
    <div className="display"> 
            {listItems.map((item)=>(
                <DisplayItems 
                item={item}
                key={item.id}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
                />
            ))}
    </div>
  )
}

export default Display