import React from 'react'
import ReactDOM from 'react-dom'
import App from 'containers/App'
import {hashHistory} from 'react-router'
import makeRoutes from './routes'
import 'styles/app.pcss'

const routes = makeRoutes()
const mountNode = document.querySelector('#root')
ReactDOM.render(
  <App history={hashHistory} routes={routes} />,
  mountNode
)
