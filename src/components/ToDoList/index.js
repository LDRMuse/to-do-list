import React, {useState, useEffect} from 'react'
import {Input} from './Input'
import {List} from './List'
import api from 'api'

export const ToDoList = () => {

const [todos, setTodos] = useState([])

useEffect(() => {
  (async () => {
    const data = await api.index()
    setTodos(data)
  })()
}, [])


// parentNode is the List item, child is the checkbox
const handleCheckbox = ({target}) => {
console.log(target.checked, target.parentNode.dataset.id)
// TODO: If checked, find the element in todos and change 'checked' to true


}

  return (
    <main>
    <h1>ToDo List</h1>
    <List todos={todos} handler={handleCheckbox}/>
    <Input />
    </main>
  )
}
