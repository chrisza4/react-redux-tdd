import { action, storiesOf } from '@kadira/storybook';

import React from 'react'
import { TodoItem } from './TodoItem'

const mockItem = {
  _id: '1', title: 'some todo', isCompleted: false
}

const renderTodoItemWithProps = (props) => {
  return (
    <ul className='todo-list'>
      <TodoItem {...props} />
    </ul>
  )
}

storiesOf('TodoItem', module)
  .add('Normal', () => (
    renderTodoItemWithProps({ item: mockItem})
  ))
  .add('Editing', () => (
    renderTodoItemWithProps({ item: mockItem, editing: true })
  ))
