import TodoReducer from './todoReducers'
import { actionTypes } from '../actionCreators/todoActions'

describe('Todo reducer', () => {
  it('should be able to add item', () => {
    const state = [ ]
    const action = {
      type: actionTypes.ADD_TODO,
      data: { id: '1', title: 'new todo' },
    }
    const expectedNextState = [
      { id: '1', title: 'new todo', isCompleted: false },
    ]
    const actual = TodoReducer(state, action)
    expect(actual).toEqual(expectedNextState)
  })
})


