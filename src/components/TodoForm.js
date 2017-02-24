import React from 'react'

export const TodoForm = (props) => {
  return (
    <form action=''>
      <input type='text' value={props.currentTodo} onChange={props.handleChange} />
    </form>

  )
}

TodoForm.propTypes = {
  currentTodo: React.PropTypes.string.isRequired,
  handleChange: React.PropTypes.func.isRequired
}
