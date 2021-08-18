const Redux = require('redux')
const createSagaMiddleware = require('redux-saga').default
const { call, put, takeEvery, takeLatest } = require('redux-saga/effects')

const sagaMiddleware = createSagaMiddleware()

const reducer = (state, action) => {
  let newState = state
  switch (action.type) {
    case 'USER_FETCH_SUCCEEDED': {
      newState = {
        ...state, 
        user: [ ...state.user, action.user ]
      }
      break
    }
  }
  return newState
}

function* fetchUser() {
  try {
     yield put({type: "USER_FETCH_SUCCEEDED", user: "hello"});
     yield put({type: "USER_FETCH_SUCCEEDED", user: "aaa"});
  } catch (e) {
     yield put({type: "USER_FETCH_FAILED", message: e.message});
  }
}

const usersSelector = (store) => store.user
const assert = (cond) => cond ? console.log('Test pass') : console.error('!!!Test failed')

const testCase = () => {
  const store = Redux.createStore(reducer,{ user: [ ]}, Redux.applyMiddleware(sagaMiddleware))
  sagaMiddleware.run(fetchUser)
  const result = usersSelector(store.getState())

  assert(result[0] === 'hello')
  assert(result[1] === 'aaa')
}

testCase()
