import { Link } from "react-router-dom"
import { Button } from "../../../../components/Button"
import { Drawer } from "../../../../components/Drawer"
import { useBasketContext } from "../../services/basket/context"
import { BalancePreview } from "../BalancePreview"

import * as S from "./ProductPageDrawer.styled"

const ProductPageDrawer = () => {
  const { isBasketEmpty } = useBasketContext()

  return (
    <Drawer>
      <BalancePreview />

      {isBasketEmpty ? null : (
        <S.CheckoutButtonContainer>
          <Link to="/basket">
            <Button>CHECK OUT</Button>
          </Link>
        </S.CheckoutButtonContainer>
      )}
    </Drawer>
  )
}

export { ProductPageDrawer }
