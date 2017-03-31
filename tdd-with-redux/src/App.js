import './App.css';

import React, { Component } from 'react'
import { applyMiddleware, combineReducers, createStore } from 'redux'

import { Provider } from 'react-redux'
import TodoBoard from './Todo/TodoBoard'
import Uuid from 'uuid'
import dataSet from './dataSource'
import thunk from 'redux-thunk'
import todoReducer from './Todo/reducer/todoReducers'

const createItem = (title) => (
  { _id: Uuid.v4(), title, isCompleted: false }
)

const reducers = combineReducers({
  todoData: todoReducer
})

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
)

class App extends Component {

  render() {
    console.log(TodoBoard)
    return (
      <Provider store={store}>
        <div className="App">
          <TodoBoard />
        </div>
      </Provider>
    );
  }
}

export default App;
