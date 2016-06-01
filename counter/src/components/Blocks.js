import React from 'react'

export default class Blocks extends React.Component {
  render () {
    const { count } = this.props
    return (
      <div>
        {this.renderBlocks(count)}
      </div>
    )
  }

  renderBlocks (blocks) {
    if (blocks < 1) {
      return null
    }
    let results = []
    while (blocks--) {
      results.push(
        <div
          key={blocks}
          className='block'
          style={{
            display: 'inline-block',
            width: '20px',
            height: '20px',
            background: 'palegreen',
            margin: '5px',
            border: '1px solid #ccc'
          }}>
        </div>)
    }
    return results
  }
}
