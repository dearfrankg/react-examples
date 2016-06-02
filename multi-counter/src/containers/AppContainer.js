import React, {Component, PropTypes} from 'react'
import App from '../components/App'

export default class AppContainer extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  }

  render () {
    const {addCounter, reset, sum} = this.props.store
    const {counters} = this.props.store.state
    const props = {addCounter, reset, sum, counters}

    return <App {...props} />
  }
}
