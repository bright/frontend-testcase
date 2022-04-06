import { useCallback, useState } from "react"
import { useAuthContext } from "../../../../services/auth/context"
import * as S from "./AuthPage.styled"
import { BiometricScreen } from "./components/BiometricScreen/BiometricScreen"
import LoginScreen from "./components/LoginScreen/LoginScreen"

type AuthPageStep = 1 | 2

const AuthPage = () => {
  const { login } = useAuthContext()
  const [step, setStep] = useState<AuthPageStep>(1)

  const submitLogin = useCallback(() => setStep(2), [])

  return (
    <S.PageWrapper>
      <S.ContentWrapper>
        {step === 1 && <LoginScreen onSubmit={submitLogin} />}
        {step === 2 && <BiometricScreen onSubmit={login} />}
      </S.ContentWrapper>
    </S.PageWrapper>
  )
}

export { AuthPage }
