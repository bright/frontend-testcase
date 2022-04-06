import { Product } from "../products"

export interface BasketProduct {
  amount: number
  product: Product
}

export interface BasketContext {
  saveToBasket: (product: Product, amount: number) => void
  basketSum: number
  checkExistsInBasket: (product: Product) => boolean
  getBasketProduct: (product: Product) => BasketProduct | undefined
  basketContent: BasketProduct[]
  isBasketEmpty: boolean
  clearBasket: () => void
}
