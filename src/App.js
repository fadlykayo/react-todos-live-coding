import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  render() {
    const data = [
      {id: 1, text: 'Learn React', isCompleted: true},
      {id: 2, text: 'Build React app', isCompleted: false},
      {id: 3, text: 'Ship it!', isCompleted: false},

    ]
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Todo</h2>
        </div>
        <div className="Todo-App">
          <form action="">
            <input type="text" />
          </form>
          <div className="Todo-List">
            <ul>
              {data.map(item => {
                return (
                  <li key={item.id}><input type="checkbox" defaultChecked={item.isCompleted} /> {item.text}</li>
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
