import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import { TodoForm, TodoList } from './components'
import { addTodo, generateId } from './lib/todoHelpers.js'

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
  handleForm (event) {
    event.preventDefault()
    const newId = generateId()
    const newTodo = {id: newId, text: this.state.currentTodo, isCompleted: false}
    const updatedTodo = addTodo(this.state.todos, newTodo)
    this.setState({
      todos: updatedTodo,
      currentTodo: ''
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
          <TodoForm handleChange={this.handleChange.bind(this)} currentTodo={this.state.currentTodo} handleForm={this.handleForm.bind(this)} />
          <TodoList todos={this.state.todos} />
        </div>
      </div>
    )
  }
}

export default App
