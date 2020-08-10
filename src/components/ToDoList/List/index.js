import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import './List.css'

export const List = ({ todos, handler }) => {


  const todosCount = todos.length;
  const completedCount = todos.filter(({ completed }) => completed).length



  return (
    <Fragment>
      <p>Todays Date is {new Date().toLocaleDateString()}</p>
      <br></br>
      <p>{completedCount} / {todosCount} Todos Completed</p>
      <br></br>
      <ol className="has-text-centered">
        {todos.map(({ id, completed, text }) => (
          <li key={id} data-id={id} className={completed ? 'completed' : null}>
            {text} <input type="checkbox" onClick={handler} /></li>
        ))}
      </ol>
    </Fragment>
  )
}

List.propTypes = {
  todos: PropTypes.array.isRequired,
  handler: PropTypes.func,
}
