import React, {Component, PropTypes} from 'react'

export default class app extends Component {
  static propTypes = {
    addCounter: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    sum: PropTypes.func.isRequired,
    counters: PropTypes.array.isRequired
  }

  renderCounters (counters) {
    return counters.map((c, i) => {
      return (
        <div key={i}>
          <span>{c.count}</span>
          <button onClick={c.dec}>decrement</button>
          <button onClick={c.inc}>increment</button>
        </div>
      )
    })
  }
  render () {
    const {addCounter, reset, sum, counters} = this.props

    return (
      <div className='container'>
        <h2>Multi Counter App</h2>
        <button onClick={addCounter}>add counter</button>
        {this.renderCounters(counters)}
        <button onClick={reset}>reset</button>
        <div>Sum: {sum()}</div>
      </div>
    )
  }
}
