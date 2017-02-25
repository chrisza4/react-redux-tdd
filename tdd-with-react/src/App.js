import './App.css';

import React, { Component } from 'react'

import TodoBoard from './Todo/TodoBoard'
import Uuid from 'uuid'

const createItem = (title) => (
  { _id: Uuid.v4(), title, isCompleted: false }
)

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      items: [ ]
    }
  }

  onAddItem = (title) => {
    this.setState({
      items: [ ...this.state.items, createItem(title) ]
    })
  }

  onEditItem = (id, title) => {
    this.setState({
      items: this.state.items.map(item => item._id === id ? { ...item, title } : item)
    })
  }

  onToggleItemCompleted = (id) => {
    this.setState({
      items: this.state.items.map(item =>
        item._id === id ? { ...item, isCompleted: !item.isCompleted } : item
      )
    })
  }

  render() {
    return (
      <div className="App">
        <TodoBoard
          items={this.state.items}
          onAddItem={this.onAddItem}
          onEditItem={this.onEditItem}
          onToggleItemCompleted={this.onToggleItemCompleted}
        />
      </div>
    );
  }
}

export default App;
