import './TodoBoard.css'

import React from 'react'
import TodoItem from './TodoItem'

export default class TodoBoard extends React.Component {
  static propTypes = {
    items: React.PropTypes.arrayOf(React.PropTypes.shape({
      _id: React.PropTypes.string,
      title: React.PropTypes.string,
      isCompleted: React.PropTypes.bool
    })),
    onAddItem: React.PropTypes.func,
  }

  constructor (props) {
    super(props)
    this.state = {
      inputValue: ''
    }
  }

  onInputChange = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  }

  onKeyDownInput = (e) => {
    if (e.keyCode === 13) {
      this.props.onAddItem(this.state.inputValue)
      this.setState({
        inputValue: ''
      })
    }
  }

  renderItems = () => {
    if (!this.props.items) return null
    return this.props.items.map(item => (
      <TodoItem key={item._id} item={item} />
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
            value={this.state.inputValue}
            autoFocus={true}
            onKeyDown={this.onKeyDownInput}
            onChange={this.onInputChange}
          />
          <ul className='todo-list'>
            {this.renderItems()}
          </ul>
        </header>
      </div>
    )
  }
}
