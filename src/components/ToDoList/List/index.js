import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import './List.css'

export const List = ({ todos, handler }) => {

  return (
    <Fragment>
    <ol className="has-text-centered">
      {todos.map(({ id, completed, text }) => (
        <li key={id} data-id={id} className={completed ? 'completed' : null}>
        {text} <input type="checkbox" onClick={handler}/></li>
      ))}
    </ol>
    </Fragment>
  )
}

List.propTypes = {
  todos: PropTypes.array.isRequired,
  handler: PropTypes.func,
}
