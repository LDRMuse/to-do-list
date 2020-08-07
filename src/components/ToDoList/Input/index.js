import React, { Fragment } from 'react'
// import PropTypes from 'prop-types'

export const Input = ({ todos }) => {
  return (
    <Fragment>
      <label>
        <input type="text" />
        <button type="onClick">Add a Todo!</button>
      </label>
    </Fragment>
  )
}

// Input.propTypes = {
//   todos: PropTypes.array
// }
