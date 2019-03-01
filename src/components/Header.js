import React from 'react'

function Header() {
  return (<header style={headerStyle}>
    <h1>Todo App</h1>
  </header>)
}

const headerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}

export default Header
