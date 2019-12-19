import React from 'react'
import { Router as BrowserRouter, Route, Switch } from 'react-router-dom'
import Page1 from '../pages/Page1'
import Page2 from '../pages/Page2'
import history from '../history'

const Routes: React.FC = () => {
  return (
    <BrowserRouter history={history}>
      <Switch>
        <Route path="/page1" component={Page1} exact />
        <Route path="/page2" component={Page2} exact />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
