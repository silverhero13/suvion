import { Recipe } from '../types/recipe'

export interface AppState {
  products: Recipe[]
}

export enum ActionType {
  RECIPES_ADD,
  RECIPES_REMOVE,
}

export type Action =
  | {
      type: ActionType.RECIPES_ADD
      product: Recipe
    }
  | {
      type: ActionType.RECIPES_REMOVE
      productId: string
    }
