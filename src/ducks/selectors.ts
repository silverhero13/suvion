import { Recipe } from '../types/recipe'

import { AppState } from './types'

export const getAvailableProducts = ({ products }: AppState): Recipe[] => {
  return products.filter(x => !x.isUnavailable)
}

export const getUnavailableProducts = ({ products }: AppState): Recipe[] => {
  return products.filter(x => x.isUnavailable)
}
