import { Link } from "react-router-dom"
import { BasketPreview } from "../../containers/BasketPreview"
import { PageLayout } from "../../containers/PageLayout"
import { useBasketContext } from "../../services/basket/context"

import * as S from "./BasketPage.styled"

const BasketPage = () => {
  const { isBasketEmpty } = useBasketContext()

  return (
    <PageLayout>
      {isBasketEmpty ? (
        <S.NoItemsMessageWrapper>
          <div>No items in the basket!</div>
          <div>
            Go to&nbsp;
            <Link to="/products">products</Link>&nbsp;page.
          </div>
        </S.NoItemsMessageWrapper>
      ) : (
        <div>
          <BasketPreview />
        </div>
      )}
    </PageLayout>
  )
}

export { BasketPage }
