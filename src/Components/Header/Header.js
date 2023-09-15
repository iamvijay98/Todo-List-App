import React from 'react'
import "../Header/Header.css"
import { AiFillCheckCircle } from "react-icons/ai"

const Header = () => {
  return (
    <div className='header'>
        <h1>T<AiFillCheckCircle />do List</h1>
    </div>
  )
}

export default Header