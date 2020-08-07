import React, { Fragment } from 'react'
// import PropTypes from 'prop-types'

export const Input = ({ todos }) => {
  return (
    <Fragment>
    <div className="has-text-centered">
      <label>
        <input className="input is-primary" placeholder="Add a Todo" type="text" />
        <button className="button is-primary is-light small" type="onClick">Add a Todo!</button>
      </label>
      </div>
    </Fragment>
  )
}

// Input.propTypes = {
//   todos: PropTypes.array
// }
