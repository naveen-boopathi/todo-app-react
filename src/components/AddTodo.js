import React, { Component } from 'react'

export class AddTodo extends Component {
  state = {
    title: ''
  }
  onChange = (e) => {
    this.setState({
      title: e.target.value
    })
  }
  onClick = (e) => {
    e.preventDefault()
    this.props.addTodo(this.state.title)
    this.setState({ title: '' })
  }
  render() {
    return (
      <form style={{ display: 'flex' }} onSubmit={this.onClick}>
        <input
          type='text'
          style={{ flex: '10', padding: '10px 10px' }}
          name='title'
          placeholder='Add Todo'
          value={this.state.title}
          onChange={this.onChange}
          autoComplete='off'
        />
        <button type='submit' className="btn" style={{ flex: '1' }}>Submit</button>
      </form>
    )
  }
}

export default AddTodo
