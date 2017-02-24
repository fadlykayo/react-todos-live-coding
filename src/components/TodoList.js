import React from 'react'

import { TodoItem } from './TodoItem.js'

export const TodoList = (props) => {
  return (
    <div className='Todo-List'>
      <ul>
        {props.todos
           .map(item => <TodoItem key={item.id} {...item} />)}
      </ul>
    </div>
  )
}

TodoList.propTypes = {
  todos: React.PropTypes.array.isRequired
}
