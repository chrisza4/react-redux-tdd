import { action, storiesOf } from '@kadira/storybook';

import React from 'react'
import { TodoBoard } from './TodoBoard'

const items = [

]

storiesOf('TodoFooter', module)
  .add('Display completed', () => (
    <TodoBoard
      onAddItem={action('Add item')}
      inputValue=''
      filter='completed'
      items={items}
    />
  ))
  .add('Display all', () => (
    <TodoBoard
      onAddItem={action('Add item')}
      inputValue=''
      filter='all'
      items={items}
    />
  ))
  .add('Display active', () => (
    <TodoBoard
      onAddItem={action('Add item')}
      inputValue=''
      filter='active'
      items={items}
    />
  ))
