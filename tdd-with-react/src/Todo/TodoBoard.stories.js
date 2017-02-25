import React from 'react'
import TodoBoard from './TodoBoard'
import { storiesOf } from '@kadira/storybook';

storiesOf('TodoBoard', module)
  .add('Without any items', () => (
    <TodoBoard />
  ))
  .add('With one incompleted items', () => {
    const items = [
      { _id: 'todo1', title: 'Do this', isCompleted: false }
    ]
    return <TodoBoard items={items} />
  })
  .add('With one completed items', () => {
    const items = [
      { _id: 'todo1', title: 'Do this', isCompleted: true }
    ]
    return <TodoBoard items={items} />
  })
  .add('Mix items', () => {
    const items = [
      { _id: 'todo1', title: 'Do this', isCompleted: false },
      { _id: 'todo2', title: 'Do this', isCompleted: true },
      { _id: 'todo3', title: 'Do this', isCompleted: true },
      { _id: 'todo4', title: 'Do this', isCompleted: false },
    ]
    return <TodoBoard items={items} />
  })
