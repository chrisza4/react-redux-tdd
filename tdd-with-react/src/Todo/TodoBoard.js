import './TodoBoard.css'

import React from 'react'
import TodoItem from './TodoItem'

export default class TodoBoard extends React.Component {
  static propTypes = {
    items: React.PropTypes.arrayOf(React.PropTypes.shape({
      _id: React.PropTypes.string,
      title: React.PropTypes.string,
      isCompleted: React.PropTypes.bool
    }))
  }

  renderItems = () => {
    if (!this.props.items) return null
    return this.props.items.map(item => (
      <TodoItem item={item} />
    ))
  }

  render () {
    return (
      <div className='todoapp'>
        <header className="header">
          <h1>todos</h1>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            value={''}
            autoFocus={true}
          />
          <ul className='todo-list'>
            {this.renderItems()}
          </ul>
        </header>
      </div>
    )
  }
}
