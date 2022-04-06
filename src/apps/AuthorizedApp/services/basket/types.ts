import { Product } from "../products"

export interface BasketProduct {
  amount: number
  product: Product
}

export interface BasketContext {
  addToBasket: (product: Product, amount: number) => void
  basketSum: number
  checkExistsInBasket: (product: Product) => boolean
  basketContent: BasketProduct[]
  isBasketEmpty: boolean
  clearBasket: () => void
}
