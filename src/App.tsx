import "@wfp/ui/src/globals/scss/styles.scss"
import { Main } from "./apps/Main"
import { AuthContextProvider } from "./services/auth/context"

function App() {
  return (
    <AuthContextProvider>
      <Main />
    </AuthContextProvider>
  )
}

export default App
