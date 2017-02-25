import './TodoBoard.css'

import React from 'react'
import TodoItem from './TodoItem'

export class TodoBoard extends React.Component {

  static propTypes = {
    inputValue: React.PropTypes.string,
    items: React.PropTypes.array,
    editingItemId: React.PropTypes.string,
    onKeyDownInput: React.PropTypes.func,
    onChange: React.PropTypes.func,
    onToggleEdit: React.PropTypes.func,
    onCancelEdit: React.PropTypes.func,
    onToggleItemCompleted: React.PropTypes.func
  }

  renderItems = () => {
    if (!this.props.items) return null
    return this.props.items.map(item => (
      <TodoItem
        key={item._id}
        item={item}
        editing={this.props.editingItemId === item._id}
        onToggleEditing={this.props.onToggleEdit}
        onToggleItemCompleted={this.props.onToggleItemCompleted}
      />
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
            value={this.props.inputValue}
            autoFocus={true}
            onKeyDown={this.props.onKeyDownInput}
            onChange={this.props.onInputChange}
            onClick={this.props.onCancelEdit}
          />
          <ul className='todo-list'>
            {this.renderItems()}
          </ul>
        </header>
      </div>
    )
  }
}

export default class TodoBoardContainer extends React.Component {
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
      inputValue: '',
      editingItemId: null
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

  onToggleEditById = (itemId) => {
    this.setState({
      editingItemId: itemId
    })
  }

  onCancelEdit = () => this.setState({ editingItemId: null })

  render () {
    return (
      <TodoBoard
        items={this.props.items}
        inputValue={this.state.inputValue}
        onAddItem={this.props.onAddItem}
        onKeyDownInput={this.onKeyDownInput}
        onInputChange={this.onInputChange}
        editingItemId={this.state.editingItemId}
        onToggleEdit={this.onToggleEditById}
        onCancelEdit={this.onCancelEdit}
        onToggleItemCompleted={this.props.onToggleItemCompleted}
      />
    )
  }
}
