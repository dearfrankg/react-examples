import React, { PropTypes } from 'react'
import { Router } from 'react-router'

class App extends React.Component {

  get content () {
    return (
      <Router
        routes={this.props.routes}
        history={this.props.history} />
    )
  }

  render () {
    return (
      <div style={{ height: '100%' }}>
        {this.content}
      </div>
    )
  }
}

App.contextTypes = {
  router: PropTypes.object
}

App.propTypes = {
  history: PropTypes.object.isRequired,
  routes: PropTypes.element.isRequired
}

export default App
