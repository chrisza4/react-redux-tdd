import React from 'react'
import TodoFooter from './TodoFooter'
import { shallow } from 'enzyme'

describe('TodoBoardContainer testing 1', () => {
  it('when filter by all, should render selected all', () => {
    const wrapper = shallow(
      <TodoFooter
        filter='all'
      />
    )
    expect(wrapper.find('.ax-all.selected')).toHaveLength(1)
    expect(wrapper.find('.ax-active.selected')).toHaveLength(0)
    expect(wrapper.find('.ax-completed.selected')).toHaveLength(0)
  })

  it('when filter by active, should render selected active', () => {
    const wrapper = shallow(
      <TodoFooter
        filter='active'
      />
    )
    expect(wrapper.find('.ax-all.selected')).toHaveLength(0)
    expect(wrapper.find('.ax-active.selected')).toHaveLength(1)
    expect(wrapper.find('.ax-completed.selected')).toHaveLength(0)
  })

  it('when filter by completed, should render selected completed', () => {
    const wrapper = shallow(
      <TodoFooter
        filter='completed'
      />
    )
    expect(wrapper.find('.ax-all.selected')).toHaveLength(0)
    expect(wrapper.find('.ax-active.selected')).toHaveLength(0)
    expect(wrapper.find('.ax-completed.selected')).toHaveLength(1)
  })
})
