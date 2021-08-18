// import * as Redux from 'redux'
// import createSagaMiddleware from 'redux-saga'
const Redux = require('redux')
const createSagaMiddleware = require('redux-saga').default
const { call, put, takeEvery, takeLatest } = require('redux-saga/effects')

const sagaMiddleware = createSagaMiddleware()

const reducer = (state, action) => {
  // console.log('Action = ', action)
  // console.log('Next state=', state)
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

const store = Redux.createStore(reducer,{ 
  user: [ ],
  profiles: [],
  tasks: [],
  newsFeed: [],
}, Redux.applyMiddleware(sagaMiddleware))

function* fetchUser() {
  try {
     yield put({type: "USER_FETCH_SUCCEEDEDXX", user: "hello"});
     yield put({type: "USER_FETCH_SUCCEEDED", user: "aaa"});
  } catch (e) {
     yield put({type: "USER_FETCH_FAILED", message: e.message});
  }
}

const usersSelector = (store) => store.user

sagaMiddleware.run(fetchUser)

console.log('users=', usersSelector(store.getState()))


const UserPage = (props) => {
  // reunder props.user
}
