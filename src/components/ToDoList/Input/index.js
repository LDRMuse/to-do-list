import React from 'react'
import PropTypes from 'prop-types'

export const Input = ({ handler }) => {
  return (
    <form onSubmit={handler}>
      <label>
        <input type="text" />
        <button type="onClick">Add a Todo!</button>
      </label>
    </form>
  )
}

Input.propTypes = {
  handler: PropTypes.func.isRequired,
}
