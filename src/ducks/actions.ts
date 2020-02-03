import { Product } from '../types/product'
import { Action, ActionType } from './types'

export const addProduct = (product: Product): Action => ({
  type: ActionType.PRODUCTS_ADD,
  product,
})

export const removeProduct = (productId: string): Action => ({
  type: ActionType.PRODUCTS_REMOVE,
  productId,
})
