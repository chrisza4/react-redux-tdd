import * as Redux from 'redux'

const authReducer = (state = { auth: false }, action) => {
  switch (action.type) {
    case 'AUTH_SUCCESS': {
      return { auth: true }
    }
    default: {
      return state
    }
  }
}

const dataReducer = (state = [ ], action) => {
  switch (action.type) {
    case 'ADD': {
      return [ ...state, action.data ]
    }
    case 'REMOVE': {
      return state.filter(s => s.id !== action.data.id)
    }
    case 'EDIT': {
      return state.map(s =>
        s.id === action.data.id ? action.data : s
      )
    }
    default: return state
  }
}

const reducers = Redux.combineReducers({
  auth: authReducer,
  data: dataReducer
})
const store = Redux.createStore(reducers, [ ])

console.log('State:', store.getState())

store.dispatch({
  type: 'AUTH_SUCCESS'
})

console.log('State:', store.getState())

store.dispatch({
  type: 'ADD',
  data: { some: 'data' }
})

console.log('State:', store.getState())
