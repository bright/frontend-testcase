import { useCallback, useMemo, useState } from "react"
import { BasketProduct } from ".."
import { Product } from "../../products"
import { BasketContext } from "./context"

const BasketContextProvider: React.FC = ({ children }) => {
  const [basketProducts, setBasketProducts] = useState<BasketProduct[]>([])

  const checkExistsInBasket = useCallback(
    (product: Product) => {
      return basketProducts.some(
        (basketProduct) => basketProduct.product.id === product.id
      )
    },
    [basketProducts]
  )

  const addToBasket = useCallback((product: Product, amount: number) => {
    setBasketProducts((prevBasketProducts) => {
      const existsInBasket = prevBasketProducts.some(
        (basketProduct) => basketProduct.product.id === product.id
      )

      return existsInBasket
        ? prevBasketProducts.map((basketProduct) =>
            basketProduct.product.id === product.id
              ? { ...basketProduct, amount: amount }
              : basketProduct
          )
        : [...prevBasketProducts, { amount, product }]
    })
  }, [])

  const basketSum = useMemo(() => {
    return basketProducts.reduce(
      (previousValue, basketProduct) =>
        previousValue + basketProduct.amount * basketProduct.product.price,
      0
    )
  }, [basketProducts])

  const clearBasket = useCallback(() => {
    setBasketProducts([])
  }, [])

  const contextData = {
    basketContent: basketProducts,
    basketSum,
    isBasketEmpty: basketProducts.length < 1,
    addToBasket,
    checkExistsInBasket,
    clearBasket,
  }

  return (
    <BasketContext.Provider value={contextData}>
      {children}
    </BasketContext.Provider>
  )
}

export { BasketContextProvider }
