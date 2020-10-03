import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import Main from './pages/Main'

export default function Routes () {
  return (
    <BrowserRouter>
      <Route exact path='/' component={Main} />
    </BrowserRouter>
  )
}
