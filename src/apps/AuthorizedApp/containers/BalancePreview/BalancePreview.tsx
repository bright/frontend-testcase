import BasketIcon from "../../../../components/Icons/BasketIcon"
import { useAuthContext } from "../../../../services/auth/context"
import { useBasketContext } from "../../services/basket/context"

import * as S from "./BalancePreview.styled"

const BalancePreview = () => {
  const {
    authData: { user },
  } = useAuthContext()
  const { basketSum } = useBasketContext()

  return (
    <S.Container>
      <S.BalanceValue>
        ₿ {user?.wallet.balance.toFixed(2) ?? 0.0}
      </S.BalanceValue>

      <S.BasketBalance>
        <S.BasketIcon>
          <BasketIcon />
        </S.BasketIcon>
        <S.BalanceValue>₿ {basketSum.toFixed(2)}</S.BalanceValue>
      </S.BasketBalance>
    </S.Container>
  )
}

export { BalancePreview }
