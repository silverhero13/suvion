import { createStore } from 'redux'
import { Action, AppState } from './types'

export const initialState: AppState = {
  products: [],
}

const reducer = (state: AppState = initialState, action: Action): AppState => {
  return state
}

export const store = createStore<AppState, Action, {}, {}>(
  reducer,
  initialState,
)
