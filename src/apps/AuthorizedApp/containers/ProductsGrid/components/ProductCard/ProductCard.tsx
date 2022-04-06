import { useCallback } from "react"
import { Product } from "../../../../services/products"

import * as S from "./ProductCard.styled"

interface Props {
  product: Product
  onClick: (product: Product) => void
  selected: boolean
}

const ProductCard = ({ selected, product, onClick }: Props) => {
  const onCardClick = useCallback(() => {
    if (!selected) {
      onClick(product)
    }
  }, [onClick, product, selected])

  return (
    <S.Card selected={selected} onClick={onCardClick}>
      <S.CardImageWrapper selected={selected}>
        {product.image}
      </S.CardImageWrapper>
      <S.CardTitle>{product.name}</S.CardTitle>
    </S.Card>
  )
}

export { ProductCard }
