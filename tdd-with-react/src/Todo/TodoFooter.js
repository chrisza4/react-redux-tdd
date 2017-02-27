import React from 'react'
import classNames from 'classnames'

const propTypes = {
  filter: React.PropTypes.string.isRequired,
  count: React.PropTypes.number.isRequired,
  onClearCompleted: React.PropTypes.func,
}
const defaultProps = {
  filter: 'all',
  count: 0,
  onClearCompleted: () => { },
}

const TodoFooter = props => (
  <footer className="footer">
    <span className="todo-count">
      <strong>{props.count}</strong> item(s) left
    </span>
    <ul className="filters">
      <li>
        <span
          className={classNames('ax-all', {
            selected: props.filter === 'all'
          })}>
            All
        </span>
      </li>
      {' '}
      <li>
        <span
          className={classNames('ax-active', {selected: props.filter === 'active'})}>
            Active
        </span>
      </li>
      {' '}
      <li>
        <span className={classNames('ax-completed', {selected: props.filter === 'completed'})}>
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
TodoFooter.defaultProps = defaultProps

export default TodoFooter
