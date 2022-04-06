import { Button } from "@wfp/ui"
import { Link } from "react-router-dom"
import { useBasketContext } from "../../services/basket/context"
import { BasketPreviewRow } from "./components/BasketPreviewRow/BasketPreviewRow"

import * as S from "./BasketPreview.styled"
import { BalancePreview } from "../BalancePreview"

const BasketPreview = () => {
  const { isBasketEmpty, basketContent } = useBasketContext()

  return (
    <S.Container>
      <S.Header>Purchase card</S.Header>

      <BalancePreview />

      <S.RowsContainer>
        {basketContent.map((basketProduct) => (
          <BasketPreviewRow
            key={basketProduct.product.id}
            basketProduct={basketProduct}
          />
        ))}
      </S.RowsContainer>

      {isBasketEmpty ? null : (
        <S.BasketButtonWrapper>
          <Link to="/checkout">
            <Button>CHECK OUT</Button>
          </Link>
        </S.BasketButtonWrapper>
      )}
    </S.Container>
  )
}

export { BasketPreview }
