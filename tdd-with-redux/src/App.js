import './App.css';

import React, { Component } from 'react'
import { combineReducers, createStore } from 'redux'

import { Provider } from 'react-redux'
import TodoBoard from './Todo/TodoBoard'
import Uuid from 'uuid'
import dataSet from './dataSource'
import todoReducer from './Todo/reducer/todoReducers'

const createItem = (title) => (
  { _id: Uuid.v4(), title, isCompleted: false }
)

const reducers = combineReducers({
  todoData: todoReducer
})

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

class App extends Component {

  // onAddItem = (title) => {
  //   this.setState({
  //     items: [ ...this.state.items, createItem(title) ]
  //   })
  // }

  // onEditItem = (id, title) => {
  //   this.setState({
  //     items: this.state.items.map(item => item._id === id ? { ...item, title } : item)
  //   })
  // }

  // onToggleItemCompleted = (id) => {
  //   this.setState({
  //     items: this.state.items.map(item =>
  //       item._id === id ? { ...item, isCompleted: !item.isCompleted } : item
  //     )
  //   })
  // }

  // onDestroy = (id) => {
  //   this.setState({
  //     items: this.state.items.filter(item => item._id !== id)
  //   })
  // }

  // onClearCompleted = () => this.setState({
  //   items: this.state.items.filter(d => !d.isCompleted)
  // })

  render() {
    console.log(TodoBoard)
    return (
      <Provider store={store}>
        <div className="App">
          <TodoBoard
            // onAddItem={this.onAddItem}
            // onEditItem={this.onEditItem}
            // onToggleItemCompleted={this.onToggleItemCompleted}
            // onDestroy={this.onDestroy}
            // onClearCompleted={this.onClearCompleted}
          />
        </div>
      </Provider>
    );
  }
}

export default App;
