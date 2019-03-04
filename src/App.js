import React, { Component } from 'react'
import './App.css'
import TodoList from './components/TodoList'
import Header from './components/Header'
import AddTodo from './components/AddTodo'

class App extends Component {
  state = {
    todos: []
  }
  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    })
  }
  deleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    })
  }
  addTodo = (title) => {
    this.setState({
      todos: [...this.state.todos, { id: this.state.todos.length + 1, title, completed: false }]
    })
  }
  render() {
    return (
      <div className='container'>
        <Header />
        <AddTodo addTodo={this.addTodo} />
        <TodoList todos={this.state.todos} toggleComplete={this.toggleComplete} deleteTodo={this.deleteTodo} />
      </div>
    )
  }
}

export default App
