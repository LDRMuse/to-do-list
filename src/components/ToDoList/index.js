import React, { useState, useEffect } from 'react'
import { Input } from './Input'
import { List } from './List'
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
  const handleCheckbox = ({ target }) => {
    const targetID = target.parentNode.dataset.id

    setTodos(() => {
      const found = todos.find(({ id }) => id === Number(targetID))

      found.completed = target.checked

      return todos.map(todo => todo.id === found.id ? found : todo)
    })
  }


  const handleAddTodo = (e) => {
    e.preventDefault()

    const newTodo = {
      completed: false,
      id: todos.length + 1,
      text: e.target.elements[0].value,
    }
    setTodos(() => todos.concat(newTodo))
  }


  const handleTrash = ({target}) => {

  return target.closest('li').remove()
  }



  return (
    <main className='has-text-centered'>
      <h1 className='title has-background-primary	'>
        ToDo List
    </h1>
      <List todos={todos} checkBoxHandler={handleCheckbox} trashHandler={handleTrash} />
      <Input handleAdd={handleAddTodo} />
    </main>
  )
}
