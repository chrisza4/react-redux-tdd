import React from 'react'
import theTable from './reactWay'

const app = React.createClass({

  getInitialState () {
    return {
      data: [ ]
    }
  },

  editTitle (newTitle, id) {
    const newData = this.state.data.map(row => row.id !== id ? row : Object.assign({ }, row, { title: newTitle }))
    this.setState({ data: newData })
  },

  render () {
    return (
      <theTable data={this.state.data} />
    )
  }
})

export default app
