import React from 'react'
import { Router as BrowserRouter, Route, Switch } from 'react-router-dom'

import history from 'browser-history'
import Home from 'pages/Home'

const Routes: React.FC = () => {
  return (
    <BrowserRouter history={history}>
      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
