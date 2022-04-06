import { useCallback, useState } from "react"
import { useBasketContext } from "../../services/basket/context"
import { Product } from "../../services/products"
import { AddProductModal } from "../AddProductModal"
import { ProductCard } from "./components/ProductCard/ProductCard"

import * as S from "./ProductsGrid.styled"

interface Props {
  products: Product[]
}

const ProductsGrid = ({ products }: Props) => {
  const { checkExistsInBasket } = useBasketContext()
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const onProductClick = useCallback((product: Product) => {
    setSelectedProduct(product)
  }, [])

  const closeAddProductModal = useCallback(() => {
    setSelectedProduct(null)
  }, [])

  return (
    <div>
      <h2>Select purchase items</h2>
      <S.Grid>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={onProductClick}
            // TODO improve performance
            selected={checkExistsInBasket(product)}
          />
        ))}
      </S.Grid>
      <AddProductModal
        product={selectedProduct}
        isOpen={selectedProduct !== null}
        onClose={closeAddProductModal}
      />
    </div>
  )
}

export { ProductsGrid }
