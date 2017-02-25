import React from 'react'
import classNames from 'classnames'

export class TodoItem extends React.Component {

  onKeyDownEdit = (e) => {
    if (e.keyCode === 13) {
      this.props.onEditCompleted(this.props.item._id, this.refs.editbox.value)
    }
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
        <input
          className="edit"
          ref='editbox'
          autoFocus
          onKeyDown={this.onKeyDownEdit}
        />
      </li>
    )
  }
}

TodoItem.propTypes = {
  item: React.PropTypes.object,
  onToggleEditing: React.PropTypes.func,
  onToggleItemCompleted: React.PropTypes.func,
  onEditCompleted: React.PropTypes.func,
}

export default TodoItem
