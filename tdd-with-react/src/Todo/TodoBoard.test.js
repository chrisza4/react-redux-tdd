import React from 'react'
import TodoBoard from './TodoBoard'
import { mount } from 'enzyme'

describe('TodoBoardContainer testing 1', () => {
  it('when filter completed, should render only completed item', () => {
    const items = [
      { _id: 'todo1', title: 'Do this', isCompleted: false },
      { _id: 'todo2', title: 'Do this', isCompleted: true },
      { _id: 'todo3', title: 'Do this', isCompleted: true },
      { _id: 'todo4', title: 'Do this', isCompleted: false },
      { _id: 'todo5', title: 'Do this', isCompleted: true },
    ]
    const wrapper = mount(
      <TodoBoard
        items={items}
        editingItemId='todo2'
      />
    )
    wrapper.setState({ filter: 'completed' })
    expect(wrapper.find('.ax-todo-item')).toHaveLength(3)
  })

  it('when filter all, should render every items', () => {
    const items = [
      { _id: 'todo1', title: 'Do this', isCompleted: false },
      { _id: 'todo2', title: 'Do this', isCompleted: true },
      { _id: 'todo3', title: 'Do this', isCompleted: true },
      { _id: 'todo4', title: 'Do this', isCompleted: false },
      { _id: 'todo5', title: 'Do this', isCompleted: true },
    ]
    const wrapper = mount(
      <TodoBoard
        items={items}
        editingItemId='todo2'
      />
    )
    wrapper.setState({ filter: 'all' })
    expect(wrapper.find('.ax-todo-item')).toHaveLength(5)
  })

  it.skip('when filter completed, should render only completed item', () => {
    // TODO: Implement this
  })
})
