import { createContext } from "react"
import { BasketContext as BasketContextData } from "../types"

export const BasketContext = createContext<BasketContextData | null>(null)
