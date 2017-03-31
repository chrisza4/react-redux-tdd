import { post } from '../../mockPost'
import uuid from 'uuid'

export const actionTypes = {
  ADD_TODO: 'ADD_TODO',
  EDIT_TODO: 'EDIT_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO',
  DESTROY_TODO: 'DESTROY_TODO',
  CLEAR_COMPLETED: 'CLEAR_COMPLETED',
  SAVING_TODO: 'SAVING_TODO'
}

export function onAddItem (title, id = uuid.v4(), deps) {
  deps = Object.assign({ post }, deps)
  return dispatch => {
    dispatch({ type: actionTypes.SAVING_TODO })
    deps.post('todo', { title, id }, (res) => {
      dispatch({
        type: actionTypes.ADD_TODO,
        data: {
          id, title
        }
      })
    })

  }
}

export function onEditItem (id, title) {
  return {
    type: actionTypes.EDIT_TODO,
    data: {
      id, title
    }
  }
}

export function onToggleItemCompleted (id) {
  return {
    type: actionTypes.TOGGLE_TODO,
    data: {
      id
    }
  }
}

export function onDestroy (id) {
  return {
    type: actionTypes.DESTROY_TODO,
    data: {
      id
    }
  }
}

export function onClearCompleted () {
  return {
    type: actionTypes.CLEAR_COMPLETED
  }
}
