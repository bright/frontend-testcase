import React, { useCallback } from "react"
import { Button } from "../../../../../../components/Button"
import Fingerprint from "../../../../../../components/Icons/FingerprintIcon"
import HandIcon from "../../../../../../components/Icons/HandIcon"

import * as S from "./BiometricScreen.styled"

interface Props {
  onSubmit: () => void
}

const BiometricScreen = ({ onSubmit }: Props) => {
  const onFormSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      onSubmit()
    },
    [onSubmit]
  )

  return (
    <S.Form onSubmit={onFormSubmit}>
      <h2>Scan finger prints</h2>

      <S.Description>place on scanner</S.Description>

      <S.HandIconWrapper>
        <HandIcon />
      </S.HandIconWrapper>

      <S.FingerPrintWrapper>
        <Fingerprint />
      </S.FingerPrintWrapper>

      <Button>SCAN</Button>
    </S.Form>
  )
}

export { BiometricScreen }
