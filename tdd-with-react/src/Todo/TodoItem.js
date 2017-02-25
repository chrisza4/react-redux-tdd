import React from 'react'
import classNames from 'classnames'

const TodoItem = (props) => {
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
        <label onDoubleClick={() => { }}>
          {props.item.title}
        </label>
        <button className="destroy" onClick={props.onDestroy} />
      </div>
      <input
        className="edit"
      />
    </li>
  )
}

TodoItem.propTypes = {
  item: React.PropTypes.object
}

export default TodoItem
