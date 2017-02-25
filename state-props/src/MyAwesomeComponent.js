import React from 'react'

export default class MyAwesomeComponent extends React.Component {

  static propTypes = {
    times: React.PropTypes.number
  }

  render () {
    return (
      <div>Times: {this.props.times}</div>
    )
  }
}
