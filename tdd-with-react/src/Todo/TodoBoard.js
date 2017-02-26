import './TodoBoard.css'

import React from 'react'
import TodoFooter from './TodoFooter'
import TodoItem from './TodoItem'

export const TodoBoardContainer = (TodoBoardComponent) => class extends React.Component {
  static propTypes = {
    items: React.PropTypes.arrayOf(React.PropTypes.shape({
      _id: React.PropTypes.string,
      title: React.PropTypes.string,
      isCompleted: React.PropTypes.bool
    })),
    onAddItem: React.PropTypes.func,
    onToggleItemCompleted: React.PropTypes.func,
    onEditItem: React.PropTypes.func,
    onDestroy: React.PropTypes.func,
  }

  constructor (props) {
    super(props)
    this.state = {
      inputValue: '',
      editingItemId: null,
      filter: 'all'
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

  onCloseEdit = () => this.setState({ editingItemId: null })

  onEditItem = (id, title) => {
    this.onCloseEdit()
    this.props.onEditItem(id, title)
  }

  render () {
    return (
      <TodoBoardComponent
        items={this.props.items}
        inputValue={this.state.inputValue}
        onAddItem={this.props.onAddItem}
        onKeyDownInput={this.onKeyDownInput}
        onInputChange={this.onInputChange}
        editingItemId={this.state.editingItemId}
        onToggleEdit={this.onToggleEditById}
        onCloseEdit={this.onCloseEdit}
        onToggleItemCompleted={this.props.onToggleItemCompleted}
        onEditCompleted={this.onEditItem}
        onDestroy={this.props.onDestroy}
        filter={this.state.filter}
      />
    )
  }
}

export class TodoBoard extends React.Component {

  static propTypes = {
    inputValue: React.PropTypes.string,
    items: React.PropTypes.array,
    editingItemId: React.PropTypes.string,
    filter: React.PropTypes.oneOf([ 'active', 'completed', 'all' ]),
    onInputChange: React.PropTypes.func,
    onKeyDownInput: React.PropTypes.func,
    onChange: React.PropTypes.func,
    onToggleEdit: React.PropTypes.func,
    onCloseEdit: React.PropTypes.func,
    onToggleItemCompleted: React.PropTypes.func,
    onEditCompleted: React.PropTypes.func,
    onDestroy: React.PropTypes.func
  }

  static defaultProps = {
    filter: 'all'
  }

  filterItems = () => {
    const { filter } = this.props
    if (filter === 'all') return this.props.items
    return this.props.items.filter(item => item.isCompleted === (filter === 'completed'))
  }

  renderItems = () => {
    if (!this.props.items) return null
    return this.filterItems().map(item => (
      <TodoItem
        key={item._id}
        item={item}
        editing={this.props.editingItemId === item._id}
        onToggleEditing={this.props.onToggleEdit}
        onToggleItemCompleted={this.props.onToggleItemCompleted}
        onEditCompleted={this.props.onEditCompleted}
        onDestroy={this.props.onDestroy}
      />
    ))
  }

  render () {
    const length = this.props.items ? this.props.items.length : 0
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
            onClick={this.props.onCloseEdit}
          />
          <ul className='todo-list'>
            {this.renderItems()}
          </ul>
          <TodoFooter count={length} filter={this.props.filter} />
        </header>
      </div>
    )
  }
}

export default TodoBoardContainer(TodoBoard)
