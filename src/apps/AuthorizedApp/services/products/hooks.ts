import { useEffect, useState } from "react"
import { fetchProducts } from "./service"
import { Product } from "./types"

type ProductState =
  | {
      state: "loading"
      data: null
    }
  | { state: "success"; data: Product[] }
  | { state: "error"; data: null }

const useProducts = () => {
  const [productsState, setProductsState] = useState<ProductState>({
    state: "loading",
    data: null,
  })

  useEffect(() => {
    const setInitialProducts = async () => {
      const products = await fetchProducts()

      setProductsState({ state: "success", data: products })
    }

    setInitialProducts()
  }, [])

  return {
    isLoading: productsState.state === "loading",
    isSuccess: productsState.state === "success",
    isError: productsState.state === "error",
    data: productsState.data ?? [],
  }
}

export { useProducts }
