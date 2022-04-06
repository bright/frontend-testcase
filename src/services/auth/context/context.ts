import { createContext } from "react"
import { AuthContext as AuthContextData } from "../types"

export const AuthContext = createContext<AuthContextData | null>(null)
