import * as Redux from 'redux'

const reducer = (state, action) => {
  console.log('Action=', action)
  return [ ...state, action ]
}
const store = Redux.createStore(reducer, [ ])

// console.log('State:', store.getState())

const action = {
  type: 'SOMEACTION',
  data: 'my world'
}
store.dispatch(action)

console.log('State:', store.getState())
