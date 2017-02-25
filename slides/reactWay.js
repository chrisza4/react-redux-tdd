import React from 'react'

const theTable = (props) => {
  const renderEachRow = (row) => {
    const className = row.warning ? 'warning' : 'normal'
    return (
      <tr className={className}>
        <td>{row.title}</td>
        <td>{row.description}</td>
      </tr>
    )
  }

  const renderAllRows = () => props.data.map(renderEachRow)

  return (
    <table>
      {renderAllRows()}
    </table>
  )
}

theTable.propTypes = {
  data: React.PropTypes.array
}

export default theTable
