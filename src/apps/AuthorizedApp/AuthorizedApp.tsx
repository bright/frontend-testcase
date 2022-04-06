import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "./pages/AppRoutes"
import { BasketContextProvider } from "./services/basket/context"

const AuthorizedApp = () => {
  return (
    <BrowserRouter>
      <BasketContextProvider>
        <AppRoutes />
      </BasketContextProvider>
    </BrowserRouter>
  )
}

export { AuthorizedApp }
