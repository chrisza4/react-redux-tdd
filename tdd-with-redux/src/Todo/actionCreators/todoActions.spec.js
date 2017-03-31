import * as TodoActions from './todoActions'

describe('TodoActions', () => {

  describe('onAddItem', () => {

    const mockPost = (url, data, callback) => {
      if (url === 'todo') {
        callback(data)
      }
    }
    const mockDeps = { post: mockPost }

    it('should display saving state', () => {
      let isDispatchSaving = false
      const dispatcher = (action) => {
        if (action.type === 'SAVING_TODO') isDispatchSaving = true
      }
      TodoActions.onAddItem('something', 1, mockDeps)(dispatcher)
      expect(isDispatchSaving).toBe(true)
    })

    it('should post data and dispatch new todo into store', () => {
      let isDispatchAddTodo = false
      const dispatcher = (action) => {
        if (action.type === 'ADD_TODO' && action.data.title === 'mytitle') isDispatchAddTodo = true
      }
      TodoActions.onAddItem('mytitle', 1, mockDeps)(dispatcher)
      expect(isDispatchAddTodo).toBe(true)
    })
  })
})
