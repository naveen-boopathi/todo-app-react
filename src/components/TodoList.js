import React, { Component } from 'react'
import Todo from './Todo'
import PropTypes from 'prop-types'

export class TodoList extends Component {
  render() {
    return this.props.todos.map((todo) => <Todo key={todo.id} todo={todo} deleteTodo={this.props.deleteTodo} toggleComplete={this.props.toggleComplete} />)
  }
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
}

export default TodoList
