import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Todo extends Component {
  getStyle = () => {
    return {
      backgroundColor: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }
  render() {
    const { id, title } = this.props.todo
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.toggleComplete.bind(this, id)} /> {' '}
          {title}
          <button style={buttonStyle} onClick={this.props.deleteTodo.bind(this, id)}>X</button>
        </p>
      </div>
    )
  }
}

const buttonStyle = {
  backgroundColor: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 8px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}

Todo.propTypes = {
  todo: PropTypes.object.isRequired
}

export default Todo
