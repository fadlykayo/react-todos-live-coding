import React from 'react'

export const TodoForm = (props) => {
  return (
    <form onSubmit={props.handleForm}>
      <input type='text' value={props.currentTodo} onChange={props.handleChange} />
    </form>

  )
}

TodoForm.propTypes = {
  currentTodo: React.PropTypes.string.isRequired,
  handleChange: React.PropTypes.func.isRequired
}
