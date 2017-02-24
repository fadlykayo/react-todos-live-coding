import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import { TodoForm } from './components/TodoForm.js'

const data = [
  { id: 1, text: 'Learn React', isCompleted: true },
  { id: 2, text: 'Build React app', isCompleted: false },
  { id: 3, text: 'Ship it!', isCompleted: false }
]
class App extends Component {
  constructor () {
    super()
    this.state = {
      todos: data,
      currentTodo: ''
    }
  }
  handleChange (event) {
    this.setState({
      currentTodo: event.target.value
    })
  }
  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>React Todo</h2>
        </div>
        <div className='Todo-App'>
          <TodoForm handleChange={this.handleChange.bind(this)} currentTodo={this.state.currentTod} />
          <div className='Todo-List'>
            <ul>
              {this.state.todos
                 .map(item => {
                   return (
                     <li key={item.id}>
                       <input type='checkbox' defaultChecked={item.isCompleted} />
                       {' '}
                       {item.text}
                     </li>
                   )
                 })}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default App
