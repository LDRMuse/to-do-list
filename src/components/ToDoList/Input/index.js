import React from 'react'
import PropTypes from 'prop-types'

export const Input = ({ handleAdd }) => {
  return (
    <form onSubmit={handleAdd} className="has-text-centered">
      <label>
        <input className="input is-primary" placeholder="Add a Todo" type="text" />
        <button className="button is-primary has-text-black small" >Add a Todo!</button>
      </label>
    </form>
  )
}

Input.propTypes = {
  handler: PropTypes.func
}
