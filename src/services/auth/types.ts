export interface AuthContext {
  authData: AuthData
  isAuthenticated: boolean
  login: () => void
  logout: () => void
  pay: (amount: number) => void
}

export interface AuthData {
  user: User | null
  isAuthenticated: boolean
}

export interface User {
  firstName: string
  lastName: string
  wallet: UserWallet
  transactionHistory: UserTransaction[]
}

interface UserWallet {
  balance: number
  address: string
}

export interface UserTransaction {
  date: Date
  id: string
  amount: number
}
