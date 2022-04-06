import { useCallback } from "react"
import { useNavigate } from "react-router-dom"
import SuccessIcon from "../../../../components/Icons/SuccessIcon"
import { useBasketContext } from "../../services/basket/context"
import * as S from "./TransactionPage.styled"

const TransactionPage = () => {
  const navigate = useNavigate()
  const { clearBasket, basketSum } = useBasketContext()

  const onConfirm = useCallback(() => {
    navigate("/products")

    clearBasket()
  }, [clearBasket, navigate])

  return (
    <S.Container>
      <S.SuccessIconContainer>
        <SuccessIcon />
      </S.SuccessIconContainer>

      <S.Description>Successful transaction for</S.Description>

      <S.TransactionAmount>₿ {basketSum.toFixed(2)}</S.TransactionAmount>

      <S.ConfirmButton onClick={onConfirm}>OK</S.ConfirmButton>

      <S.PrintButton>
        <S.PrintIcon>🖨️</S.PrintIcon>Print receipt
      </S.PrintButton>
    </S.Container>
  )
}

export { TransactionPage }
