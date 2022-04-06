import { useMemo } from "react"
import { BasketProduct } from "../../../../services/basket"
import { BasketPreviewProduct } from "../BasketPreviewProduct/BasketPreviewProduct"

import * as S from "./BasketPreviewRow.styled"

interface Props {
  basketProduct: BasketProduct
}

const BasketPreviewRow = ({ basketProduct }: Props) => {
  const sum = useMemo(
    () => basketProduct.amount * basketProduct.product.price,
    [basketProduct.amount, basketProduct.product.price]
  )

  return (
    <S.Row>
      <BasketPreviewProduct product={basketProduct.product} />
      <S.Amount>{`${basketProduct.amount} ${basketProduct.product.unit}`}</S.Amount>
      <S.Sum>{`₿ ${sum.toFixed(2)}`}</S.Sum>
    </S.Row>
  )
}

export { BasketPreviewRow }
