import React, {useState} from 'react'
import {Input} from './Input'
import api from 'api'

export const ToDoList = () => {

const [state, setstate] = useState(initialState)

useEffect(() => {
  (async () => {
    const data = await api.index()
    setState(data)
  })()
}, [])



  return (
    <main>
    <h1>ToDo List</h1>
    <ul>
      <li>Im a list
      <input type='checkbox' />
      </li>
    </ul>
    <Input />
    </main>
  )
}
