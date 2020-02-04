import React from 'react'
import { Provider } from 'react-redux'

import { store } from 'ducks'
import Routes from 'routes'

import 'App.scss'

const App: React.FC = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
)

export default App
