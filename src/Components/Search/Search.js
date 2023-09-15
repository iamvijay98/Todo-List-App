import React from 'react'
import "../Search/Search.css"
import "../../App.css"
import {LuSearchCheck} from "react-icons/lu"

const Search = ({search,setSearch}) => {
  return (
    <div className='search'>
        <input 
        type="text" 
        placeholder='Search Lists'
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        />
        <LuSearchCheck />
    </div>
  )
}

export default Search