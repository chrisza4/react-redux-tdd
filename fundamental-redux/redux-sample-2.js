import * as Redux from 'redux'

const reducer = (state, action) => [ ...state, action ]
const store = Redux.createStore(reducer, [ ])

console.log('State:', store.getState())

store.dispatch({
  type: 'SOMEACTION',
  data: 'fuck world'
})

console.log('State:', store.getState())