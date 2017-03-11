import * as Redux from 'redux'

const reducer = (state, action) => state
const store = Redux.createStore(reducer, {
  hello: 'world'
})

console.log('State:', store.getState())