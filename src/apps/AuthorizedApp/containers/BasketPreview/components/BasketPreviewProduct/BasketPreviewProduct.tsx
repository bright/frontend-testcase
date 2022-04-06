import { Product } from "../../../../services/products"

import * as S from "./BasketPreviewProduct.styled"

interface Props {
  product: Product
}

const BasketPreviewProduct = ({ product }: Props) => {
  return (
    <S.Container>
      <S.Image>{product.image}</S.Image>
      <S.NameAndPrice>
        <div>{product.name}</div>
        <div>{`₿ ${product.price}/${product.unit}`}</div>
      </S.NameAndPrice>
    </S.Container>
  )
}

export { BasketPreviewProduct }
