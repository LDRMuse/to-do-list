import React, {Fragment} from 'react'

export const Input = () => {
  return (
    <Fragment>
      <label>
        <input type="text" />
        <button type="onClick">Add a Todo!</button>
      </label>
    </Fragment>
  )
}
