import "./App.css"
import { useState } from "react"

export default function App(){
  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState([])

  function handleSubmit(e){
    e.preventDefault()

    setTodos([...todos, {id: crypto.randomUUID(), titles: newItem, complete: false}])
  }

  return (
  <form onSubmit = {handleSubmit} onclassName = "new-item-form">
    <>
      <div className = "form-row">
        <label htmlFor = "item">New Item</label>
        <input 
        value={newItem} 
        onChange = {e => setNewItem(e.target.value)}
        type = "text" 
        id = "item" 
        />
      </div>
      <button className = "btn"> Add </button>
      <h1 className = "header"> Todo List</h1>
      <ul className = "list">
        <li>
          <label>
            <input type = "checkbox" />
            Item 1
          </label>
          <button className ="brn btn-danger">
            Delete
          </button>
        </li>
        <li>
          <label>
            <input type = "checkbox" />
            Item 1
          </label>
          <button className ="brn btn-danger">
            Delete
          </button>
        </li>
      </ul>
    </>

  </form>)
}