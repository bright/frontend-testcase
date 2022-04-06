import { mockedProducts } from "./mocks"
import { Product } from "./types"

function delay(time: number) {
  return new Promise((resolve) => setTimeout(resolve, time))
}

const fetchProducts = async (): Promise<Product[]> => {
  await delay(500)
  return mockedProducts
}

export { fetchProducts }
