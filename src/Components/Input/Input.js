import React from 'react'
import "../Input/Input.css"
import "../../App.css"

const Input = ({input,setInput,handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className='inputBox'>
            <input 
            type="text" 
            placeholder='Add List...'
            value={input}
            required
            onChange={(e)=>setInput(e.target.value)}
            />
            <button>ADD</button>
      </div>
    </form>
  )
}

export default Input