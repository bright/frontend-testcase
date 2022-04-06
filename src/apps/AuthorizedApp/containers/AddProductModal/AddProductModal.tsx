import { Modal, TextInput } from "@wfp/ui"
import { ChangeEventHandler, useCallback, useState } from "react"
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
  const { addToBasket } = useBasketContext()

  const [amount, setAmount] = useState<number>(1)

  const onAmountChange: ChangeEventHandler<TextInput> = (
    event: React.ChangeEvent<TextInput>
  ) => {
    // @ts-ignore
    setAmount(event.target.value)
  }

  const onSave = useCallback(() => {
    if (!product) return null

    addToBasket(product, amount)
    onClose()
  }, [addToBasket, amount, onClose, product])

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
                type="decimal"
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
