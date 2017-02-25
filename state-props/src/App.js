import './App.css'

import React, { Component } from 'react'

import MyAwesomeComponent from './MyAwesomeComponent'

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      times: 0
    }
  }

  increment = () => {
    this.setState({ times: this.state.times + 1 })
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.increment}>Press this</button>
        <p>
          <MyAwesomeComponent times={this.state.times} />
        </p>
      </div>
    )
  }
}

export default App
