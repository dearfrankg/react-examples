import React, {Component, PropTypes as T} from 'react'
import Blocks from 'components/Blocks'

export default class App extends Component {
  static propTypes = {
    dec: T.func.isRequired,
    inc: T.func.isRequired,
    reset: T.func.isRequired,
    count: T.number.isRequired
  }

  render () {
    const {dec, inc, reset, count} = this.props

    return (
      <div className='container'>
        <h2><i className='icon ion-ios-cloud'></i> React Starter 2016-5</h2>
        <button onClick={dec} >decrement</button>
        <button onClick={inc} >increment</button>
        <button onClick={reset} >reset</button>
        <h3>Count: {count}</h3>
        <Blocks count={count} />
      </div>
    )
  }
}
