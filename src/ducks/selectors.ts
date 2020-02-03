import { Product } from '../types/product'

import { AppState } from './types'

export const getAvailableProducts = ({ products }: AppState): Product[] => {
  return products.filter(x => !x.isUnavailable)
}

export const getUnavailableProducts = ({ products }: AppState): Product[] => {
  return products.filter(x => x.isUnavailable)
}
