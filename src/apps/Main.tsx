import { useAuthContext } from "../services/auth/context"
import { AuthorizedApp } from "./AuthorizedApp"
import { UnauthorizedApp } from "./UnauthorizedApp"

const Main = () => {
  const { isAuthenticated } = useAuthContext()

  return isAuthenticated ? <AuthorizedApp /> : <UnauthorizedApp />
}

export { Main }
