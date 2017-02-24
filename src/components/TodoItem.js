import React from 'react'

export const TodoItem = (props) => {
  return (
    <li>
      <input type='checkbox' defaultChecked={props.isCompleted} />
      {' '}
      {props.text}
    </li>
  )
}

TodoItem.propTypes = {
  text: React.PropTypes.string.isRequired,
  isCompleted: React.PropTypes.bool,
  id: React.PropTypes.number.isRequired
}
