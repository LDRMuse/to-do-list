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



  return (
    <main>
    <h1>ToDo List</h1>
    <List todos={todos} />
    {/* <Input /> */}
    </main>
  )
}
