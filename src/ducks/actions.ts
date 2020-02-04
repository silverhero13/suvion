import { Recipe } from '../types/recipe'
import { Action, ActionType } from './types'

export const addProduct = (product: Recipe): Action => ({
  type: ActionType.RECIPES_ADD,
  product,
})

export const removeProduct = (productId: string): Action => ({
  type: ActionType.RECIPES_REMOVE,
  productId,
})
