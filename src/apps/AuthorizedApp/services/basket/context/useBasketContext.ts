import { useContext } from "react"
import { BasketContext } from "./context"

const useBasketContext = () => {
  const context = useContext(BasketContext)

  if (!context) {
    throw new Error(
      "useBasketContext must be used within BasketContextProvider"
    )
  }

  return context
}

export { useBasketContext }
