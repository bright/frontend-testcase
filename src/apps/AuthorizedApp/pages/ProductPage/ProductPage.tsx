import { Loading } from "@wfp/ui"
import { BasketPreview } from "../../containers/BasketPreview"
import { PageLayout } from "../../containers/PageLayout"
import { ProductPageDrawer } from "../../containers/ProductPageDrawer"
import { ProductsGrid } from "../../containers/ProductsGrid"
import { useProducts } from "../../services/products"
import * as S from "./ProductPage.styled"

const ProductPage = () => {
  const { data, isLoading, isSuccess } = useProducts()

  return (
    <PageLayout>
      <div className="row">
        {isLoading ? <Loading /> : null}

        <S.ContentContainer>
          {isSuccess && data ? <ProductsGrid products={data} /> : null}

          <S.HideMobile>
            <BasketPreview />
          </S.HideMobile>

          <S.HideDesktop>
            <ProductPageDrawer />
          </S.HideDesktop>
        </S.ContentContainer>
      </div>
    </PageLayout>
  )
}

export { ProductPage }
