import React from 'react'
import './App.scss'
import Routes from './routes'
import { Provider } from 'react-redux'
import { store } from './ducks'

const App: React.FC = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
)

export default App
