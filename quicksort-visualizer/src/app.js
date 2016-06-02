import React from 'react'
import ReactDOM from 'react-dom'
import createStore from 'store'
import AppContainer from 'containers/AppContainer'
import 'styles/app.pcss'

const mountNode = document.getElementById('root')
const store = createStore()

store.observe(() => {
  ReactDOM.render(<AppContainer store={store} />, mountNode)
})
