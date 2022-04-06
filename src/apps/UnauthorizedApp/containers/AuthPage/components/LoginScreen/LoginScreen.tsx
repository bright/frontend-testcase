import { TextInput } from "@wfp/ui"
import React, { ChangeEventHandler, useState } from "react"
import { Button } from "../../../../../../components/Button"
import Fingerprint from "../../../../../../components/Icons/FingerprintIcon"
import * as S from "./LoginScreen.styled"

interface Props {
  onSubmit: () => void
}

const LoginScreen = ({ onSubmit }: Props) => {
  const [login, setLogin] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const onLoginChange: ChangeEventHandler<TextInput> = (
    event: React.ChangeEvent<TextInput>
  ) => {
    // @ts-ignore
    setLogin(event.target.value)
  }

  const onPasswordChange: ChangeEventHandler<TextInput> = (
    event: React.ChangeEvent<TextInput>
  ) => {
    // @ts-ignore
    setPassword(event.target.value)
  }

  const isLoginValid = login !== "" && login.length > 3
  const isPasswordValid = password !== "" && password.length > 3

  const isValid = isLoginValid && isPasswordValid

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!isValid) {
      return
    }

    onSubmit()
  }

  return (
    <S.Form onSubmit={onFormSubmit}>
      <S.FingerPrintWrapper>
        <Fingerprint />
      </S.FingerPrintWrapper>

      <S.AuthElementWrapper>
        <TextInput
          id="login"
          labelText="Login"
          name="Login"
          type="text"
          value={login}
          onChange={onLoginChange}
          placeholder="Login"
        />
      </S.AuthElementWrapper>
      <S.AuthElementWrapper>
        <TextInput
          id="password"
          labelText="Password"
          name="password"
          value={password}
          onChange={onPasswordChange}
          // @ts-ignore
          type="password"
          placeholder="Password"
        />
      </S.AuthElementWrapper>

      <S.LoginButtonWrapper>
        <Button disabled={!isValid} onClick={onSubmit}>
          LOG IN
        </Button>
      </S.LoginButtonWrapper>
    </S.Form>
  )
}

export default LoginScreen
