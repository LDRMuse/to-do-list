import React from 'react'
import PropTypes from 'prop-types'

export const Input = ({ handler }) => {
  return (
    <form className="has-text-centered">
      <label>
        <input className="input is-primary" placeholder="Add a Todo" type="text" />
        <button className="button is-primary has-text-black small" type="onClick">Add a Todo!</button>
      </label>
    </form>
  )
}

Input.propTypes = {
  handler: PropTypes.func
}
