import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import './List.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const List = ({ todos, checkBoxHandler, trashHandler }) => {


  const todosCount = todos.length;
  const completedCount = todos.filter(({ completed }) => completed).length



  let className = "has-text-centered has-background-dark has-text-danger-light"
  className += completedCount / todosCount < 0.5 ? "has-text-success-light" : "has-text-warning-light"



  return (
    <Fragment>
      <p className="has-text-centered">
        {new Date().toLocaleDateString()}&nbsp;
      </p>
<br/>
      <p className={className}>
        {completedCount} / {todosCount} Todos Completed!
      </p>
<br/>
      <ol className="has-text-left">
        {todos.map(({ id, completed, text }) => (
          <li key={id} data-id={id} className={completed ? 'completed' : null}>
            {text} <input type="checkbox" onClick={checkBoxHandler} />
            <FontAwesomeIcon icon={faTrash} className="has-text-danger ml-2" onClick={trashHandler} /></li>
        ))}
      </ol>
      <br/>
    </Fragment>
  )
}

List.propTypes = {
  todos: PropTypes.array.isRequired,
  checkBoxHandler: PropTypes.func,
  trashHandler: PropTypes.func,
}
