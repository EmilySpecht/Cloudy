import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'

import Routes from './routes'

import './assets/styles/global.css'

ReactDOM.render(
  <StrictMode>
    <Routes />
  </StrictMode>,
  document.getElementById('root')
)
