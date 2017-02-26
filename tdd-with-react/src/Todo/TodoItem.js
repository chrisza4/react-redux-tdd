import React from 'react'
import classNames from 'classnames'

const propTypes = {
  item: React.PropTypes.object,
  currentEditTitle: React.PropTypes.string,
  editing: React.PropTypes.bool,
  onToggleEditing: React.PropTypes.func,
  onToggleItemCompleted: React.PropTypes.func,
  onEditCompleted: React.PropTypes.func,
  onDestroy: React.PropTypes.func
}

export default class TodoItemContainer extends React.Component {

  static propTypes = propTypes

  constructor (props) {
    super(props)
    this.state = {
      editingTitle: props.item.title
    }
  }

  onKeyDownEdit = (e) => {
    if (e.keyCode === 13) {
      this.props.onEditCompleted(this.props.item._id, this.state.editingTitle)
    }
  }

  onChange = (e) => this.setState({ editingTitle: e.target.value })

  onDestroy = () => this.props.onDestroy(this.props.item._id)

  render () {
    return (
      <TodoItem
        {...this.props}
        currentEditTitle={this.state.editingTitle}
        onChange={this.onChange}
        onKeyDownEdit={this.onKeyDownEdit}
        onDestroy={this.onDestroy}
      />
    )
  }
}

export class TodoItem extends React.Component {

  static propTypes = {
    ...propTypes,
    onChange: React.PropTypes.func,
    onKeyDownEdit: React.PropTypes.func,
  }

  renderInput () {
    if (!this.props.editing) return null
    return (
      <input
        className="edit"
        ref='editbox'
        autoFocus
        onKeyDown={this.props.onKeyDownEdit}
        onChange={this.props.onChange}
        value={this.props.currentEditTitle}
      />
    )
  }

  renderCompleted () {
    if (!this.props.item.isCompleted) return null
    const dateString = this.props.item.completed ? this.props.item.completed.toString() : null
    return (
      <div className='completed-date'>
        Complete on {dateString}
      </div>
    )
  }

  render () {
    const className = classNames({
      completed: this.props.item.isCompleted,
      editing: this.props.editing,
    })

    return (
      <li className={className}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={this.props.item.isCompleted}
            onChange={() => this.props.onToggleItemCompleted(this.props.item._id)}
          />
          <label onDoubleClick={() => this.props.onToggleEditing(this.props.item._id)}>
            {this.props.item.title}
          </label>
          <button className="destroy" onClick={this.props.onDestroy} />
        </div>
        {this.renderCompleted()}
        {this.renderInput()}
      </li>
    )
  }
}
