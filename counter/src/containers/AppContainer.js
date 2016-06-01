import React, {Component, PropTypes as T} from 'react'
import App from 'components/App'

export default class AppContainer extends Component {
  static propTypes = {
    store: T.object.isRequired
  }

  render () {
    const {dec, inc, reset} = this.props.store
    const {count} = this.props.store.state
    const props = {dec, inc, reset, count}

    return <App {...props} />
  }
}
