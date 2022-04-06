import { useCallback, useMemo, useState } from "react"
import { mockedUser } from "../mocks"
import { AuthData } from "../types"
import { AuthContext } from "./context"

const AuthContextProvider: React.FC = ({ children }) => {
  const [authData, setAuthData] = useState<AuthData>({
    isAuthenticated: false,
    user: null,
  })

  const login = useCallback(() => {
    setAuthData({ isAuthenticated: true, user: mockedUser })
  }, [])

  const logout = useCallback(() => {
    setAuthData({ isAuthenticated: false, user: null })
  }, [])

  const pay = useCallback(
    (amount: number) => {
      if (!authData.isAuthenticated || !authData.user) {
        return
      }

      setAuthData({
        ...authData,
        user: {
          ...authData.user,
          wallet: {
            ...authData.user.wallet,
            balance: authData.user.wallet.balance - amount,
          },
        },
      })
    },
    [authData]
  )

  const contextData = useMemo(
    () => ({
      isAuthenticated: authData.isAuthenticated,
      authData,
      login,
      logout,
      pay,
    }),
    [authData, login, logout, pay]
  )

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  )
}

export { AuthContextProvider }
