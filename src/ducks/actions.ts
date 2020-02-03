import { Product } from '../types/product'
import { Action, ActionType } from './types'

export const addOneProduct = (product: Product): Action => ({
  type: ActionType.PRODUCTS_ADD,
  product,
})

export const removeOneProduct = (productId: string): Action => ({
  type: ActionType.PRODUCTS_REMOVE,
  productId,
})
