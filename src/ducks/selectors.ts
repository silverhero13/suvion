import { Recipe } from '../types/recipe'

import { AppState } from './types'

export const getAvailableProducts = ({ recipes: products }: AppState): Recipe[] => {
  return products.filter(x => !x.isUnavailable)
}

export const getUnavailableProducts = ({ recipes: products }: AppState): Recipe[] => {
  return products.filter(x => x.isUnavailable)
}
