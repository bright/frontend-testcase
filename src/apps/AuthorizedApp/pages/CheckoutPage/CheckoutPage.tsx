import { Story } from "@wfp/ui"
import { useCallback, useMemo } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuthContext } from "../../../../services/auth/context"
import { useBasketContext } from "../../services/basket/context"
import * as S from "./CheckoutPage.styled"

const CheckoutPage = () => {
  const {
    authData: { user },
    pay,
  } = useAuthContext()
  const navigate = useNavigate()
  const { isBasketEmpty, basketSum } = useBasketContext()

  const balanceAfterPayment = useMemo(
    () => (user?.wallet.balance ?? 0) - basketSum,
    [basketSum, user?.wallet.balance]
  )

  const onPay = useCallback(() => {
    navigate("/transaction")
    pay(basketSum)
  }, [basketSum, navigate, pay])

  return isBasketEmpty ? (
    <div>
      No items in the basket! Go to&nbsp;
      <Link to="/products">products</Link>&nbsp;page and add items to the
      basket.
    </div>
  ) : (
    <S.Container>
      <Story>
        <S.Header>Check out</S.Header>
      </Story>

      <S.Description>Check the balance before checking out:</S.Description>

      <S.BalanceValue color="#A0A2D5">₿ {user?.wallet.balance}</S.BalanceValue>
      <S.Symbol>-</S.Symbol>
      <S.BalanceValue color="#FF7F01">₿ {basketSum.toFixed(2)}</S.BalanceValue>
      <S.Symbol>=</S.Symbol>
      <S.BalanceValue color="#FFFFFF">
        {balanceAfterPayment.toFixed(2)}
      </S.BalanceValue>

      <S.CheckoutButton onClick={onPay}>CHECK OUT</S.CheckoutButton>
      <Link to="/products">go back</Link>
    </S.Container>
  )
}

export { CheckoutPage }
