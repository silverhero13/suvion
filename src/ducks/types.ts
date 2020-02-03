import { Product } from '../types/product'

export interface AppState {
  products: Product[]
}

export enum ActionType {
  PRODUCTS_ADD,
  PRODUCTS_REMOVE,
}

export type Action =
  | {
      type: ActionType.PRODUCTS_ADD
      product: Product
    }
  | {
      type: ActionType.PRODUCTS_REMOVE
      productId: string
    }
