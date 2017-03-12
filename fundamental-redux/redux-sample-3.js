import * as Redux from 'redux'

const reducer = (state, action) => {
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

const store = Redux.createStore(reducer, [ ])

store.dispatch({
  type: 'ADD',
  data: {
    id: 'data1',
    title: 'fuck world'
  }
})

console.log('State1:', store.getState())

store.dispatch({
  type: 'ADD',
  data: {
    id: 'data2',
    title: 'Hello world. You are nice'
  }
})

console.log('State2:', store.getState())

store.dispatch({
  type: 'EDIT',
  data: {
    id: 'data1',
    title: 'Hello world. I will not be mean'
  }
})

console.log('State3:', store.getState())
