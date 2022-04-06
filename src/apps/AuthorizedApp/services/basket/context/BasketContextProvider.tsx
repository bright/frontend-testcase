import { useCallback, useMemo, useState } from "react"
import { BasketProduct } from ".."
import { Product } from "../../products"
import { BasketContext } from "./context"

const BasketContextProvider: React.FC = ({ children }) => {
  const [basketProducts, setBasketProducts] = useState<BasketProduct[]>([])

  const getBasketProduct = useCallback(
    (product: Product) => {
      return basketProducts.find(
        (basketProduct) => basketProduct.product.id === product.id
      )
    },
    [basketProducts]
  )

  const checkExistsInBasket = useCallback(
    (product: Product) => {
      return getBasketProduct(product) !== undefined
    },
    [getBasketProduct]
  )

  const saveToBasket = useCallback(
    (product: Product, amount: number) => {
      setBasketProducts((prevBasketProducts) => {
        const existsInBasket = checkExistsInBasket(product)
        const basketProductToSave = { amount, product }

        return existsInBasket
          ? prevBasketProducts.map((basketProduct) =>
              basketProduct.product.id === product.id
                ? basketProductToSave
                : basketProduct
            )
          : [...prevBasketProducts, basketProductToSave]
      })
    },
    [checkExistsInBasket]
  )

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
    saveToBasket,
    checkExistsInBasket,
    clearBasket,
    getBasketProduct,
  }

  return (
    <BasketContext.Provider value={contextData}>
      {children}
    </BasketContext.Provider>
  )
}

export { BasketContextProvider }
