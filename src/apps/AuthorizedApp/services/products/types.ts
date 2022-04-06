import { ReactElement } from "react"

export interface Product {
  id: number
  name: string
  description: string | null
  price: number
  unit: string
  image: ReactElement
}
