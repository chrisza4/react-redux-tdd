// import * as Redux from 'redux'
// import createSagaMiddleware from 'redux-saga'
const Redux = require('redux')
const createSagaMiddleware = require('redux-saga').default
const { call, put, takeEvery, takeLatest } = require('redux-saga/effects')

const sagaMiddleware = createSagaMiddleware()

const reducer = (state, action) => {
  console.log('Action = ', action)
  console.log('Next state=', state)
  return state
}

const store = Redux.createStore(reducer, Redux.applyMiddleware(sagaMiddleware))

function* fetchUser() {
  try {
     yield put({type: "USER_FETCH_SUCCEEDED", user: "hello"});
     yield put({type: "USER_FETCH_SUCCEEDED", user: "aaa"});
  } catch (e) {
     yield put({type: "USER_FETCH_FAILED", message: e.message});
  }
}

sagaMiddleware.run(fetchUser)
