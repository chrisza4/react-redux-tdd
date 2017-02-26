import React from 'react'
import classNames from 'classnames'

const propTypes = {
  filter: React.PropTypes.string.isRequired,
  count: React.PropTypes.number.isRequired,
  onClearCompleted: React.PropTypes.func,
}

const TodoFooter = props => (
  <footer className="footer">
    <span className="todo-count">
      <strong>{props.count}</strong> item(s) left
    </span>
    <ul className="filters">
      <li>
        <span
          className={classNames({selected: props.filter === 'all'})}>
            All
        </span>
      </li>
      {' '}
      <li>
        <span
          className={classNames({selected: props.filter === 'active'})}>
            Active
        </span>
      </li>
      {' '}
      <li>
        <span className={classNames({selected: props.filter === 'completed'})}>
            Completed
        </span>
      </li>
    </ul>
    <button
      className="clear-completed"
      onClick={props.onClearCompleted}>
        Clear completed
    </button>
  </footer>
)

TodoFooter.propTypes = propTypes

export default TodoFooter
