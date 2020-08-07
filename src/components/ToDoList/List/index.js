import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

export const List = ({ todos, handler }) => {





  return (
    <Fragment>
    <ol>
      {todos.map(({ id, text }) => (
        <li key={id} data-id={id}>
        {text} <input type="checkbox" onClick={handler}/></li>
      ))}
    </ol>
    </Fragment>
  )
}

List.propTypes = {
  todos: PropTypes.array.isRequired,
  handler: PropTypes.func
}
