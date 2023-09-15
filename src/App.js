import React, { useEffect, useState } from 'react'
import Header from './Components/Header/Header'
import "./App.css"
import Input from './Components/Input/Input'
import Display from './Components/Display/Display'
import Search from './Components/Search/Search'
import Footer from './Components/Footer/Footer'

const App = () => {

  const [listItems,setListItems] =useState([])

  const [search,setSearch] =useState("")
  const [input,setInput] =useState("")

  //console.log(listItems)

console.log(listItems)

useEffect(()=>{
  setListItems(JSON.parse(localStorage.getItem("todo-app")) || [])
},[])

  const handleCheck=(id)=>{
   const items= listItems.map((item)=>(
      item.id === id ? {...item,checked:!item.checked} : item
    ))
    setListItems(items)
    localStorage.setItem("todo-app",JSON.stringify(items))
  }



  const handleDelete = (id)=>{
    const items = listItems.filter((item)=>(
      item.id !== id 
    ))
    setListItems(items)
    localStorage.setItem("todo-app",JSON.stringify(items))
  }



  const handleSubmit=(e)=>{
    e.preventDefault()

    if(!input){
      return
    }

    const id = listItems.length ? listItems[listItems.length -1].id + 1 : 1;
    const listObj ={id:id,checked:false,items:input}
    setListItems([...listItems,listObj])
    setInput("")
    localStorage.setItem("todo-app",JSON.stringify([...listItems,listObj]))
    
  }


  return (
    <div className="todo-App">
      <div className="todo-container">
        <Header />

        <Search 
        search={search}
        setSearch={setSearch}
        />

        <Input 
        input={input}
        setInput={setInput}
        handleSubmit={handleSubmit}
        />

        {listItems.length ? (
            <Display
            handleDelete={handleDelete}
            listItems={listItems.filter((item)=>(
              (item.items).toLowerCase().includes(search.toLowerCase())
             ))}
            handleCheck={handleCheck}
          />
        ) : <p 
              style={{color:"white",
                      textAlign:"center",
                      marginTop:"100px",
                      fontSize:"25px"
                    }}
              >No Lists are here
            </p>
        }

        <Footer 
        listItems={listItems}
        />
      </div>
    </div>
  )
}


export default App