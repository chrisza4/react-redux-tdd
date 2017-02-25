import React from 'react'
import classNames from 'classnames'

export const TodoItem = (props) => {
  const className = classNames({
    completed: props.item.isCompleted,
    editing: props.editing
  })
  return (
    <li className={className}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={props.item.isCompleted}
          onChange={props.onToggle}
        />
        <label onDoubleClick={() => props.onToggleEditing(props.item._id)}>
          {props.item.title}
        </label>
        <button className="destroy" onClick={props.onDestroy} />
      </div>
      <input
        className="edit"
        autoFocus
      />
    </li>
  )
}

TodoItem.propTypes = {
  item: React.PropTypes.object,
  onToggleEditing: React.PropTypes.func
}

export default TodoItem
