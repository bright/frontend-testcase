import { Modal, TextInput } from "@wfp/ui"
import { ChangeEventHandler, useCallback, useEffect, useState } from "react"
import { Button } from "../../../../components/Button"
import { useBasketContext } from "../../services/basket/context"
import { Product } from "../../services/products"

import * as S from "./AddProductModal.styled"

interface Props {
  product: Product | null
  isOpen: boolean
  onClose: () => void
}

const AddProductModal = ({ product, isOpen, onClose }: Props) => {
  const { saveToBasket, getBasketProduct } = useBasketContext()

  const [amount, setAmount] = useState<number>(1)

  useEffect(() => {
    if (!product) {
      return
    }

    const basketProduct = getBasketProduct(product)
    if (basketProduct) {
      setAmount(basketProduct.amount)
    }
  }, [getBasketProduct, product])

  const onAmountChange: ChangeEventHandler<TextInput> = (
    event: React.ChangeEvent<TextInput>
  ) => {
    // @ts-ignore
    const value = event.target.value

    const roundedValue = Number(value).toFixed(2)
    setAmount(Number(roundedValue))
  }

  const onSave = useCallback(() => {
    if (!product) return null

    saveToBasket(product, amount)
    onClose()
    setAmount(1.0)
  }, [saveToBasket, amount, onClose, product])

  const sum = amount * (product?.price ?? 0)

  return (
    <Modal
      open={isOpen && product !== null}
      onRequestClose={onClose}
      modalFooter={() => (
        <Button onClick={onSave}>{`ADD ₿ ${sum.toFixed(2)}`}</Button>
      )}
      className="modal"
    >
      {product ? (
        <S.Content>
          <S.ProductInfoRow>
            <S.ProductNameAndIcon>
              <S.ProductIcon>{product?.image}</S.ProductIcon>
              <div>{product?.name}</div>
            </S.ProductNameAndIcon>
            <div>{`₿ ${product?.price}/${product?.unit}`}</div>
          </S.ProductInfoRow>

          <S.AmountRowWraper>
            <S.AmountRow>
              <TextInput
                // @ts-ignore
                type="number"
                name="amount"
                value={amount}
                onChange={onAmountChange}
                placeholder="Login"
              />
              <S.Unit>{product?.unit ?? ""}</S.Unit>
            </S.AmountRow>
          </S.AmountRowWraper>
        </S.Content>
      ) : null}
    </Modal>
  )
}

export { AddProductModal }
