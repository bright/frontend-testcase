import { Loading } from "@wfp/ui"
import { lazy, ReactElement, Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import ProductPage from "./ProductPage"

const BasketPage = lazy(async () => import("./BasketPage"))
const CheckoutPage = lazy(async () => import("./CheckoutPage"))
const TransactionPage = lazy(async () => import("./TransactionPage"))
const TransactionHistoryPage = lazy(
  async () => import("./TransactionHistoryPage")
)

const withSuspense = (element: ReactElement) => (
  <Suspense fallback={<Loading />}>{element}</Suspense>
)

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/products" element={<ProductPage />} />
      <Route path="/basket" element={withSuspense(<BasketPage />)} />
      <Route path="/checkout" element={withSuspense(<CheckoutPage />)} />
      <Route path="/transaction" element={withSuspense(<TransactionPage />)} />
      <Route
        path="/history"
        element={withSuspense(<TransactionHistoryPage />)}
      />
      <Route path="*" element={<ProductPage />} />
    </Routes>
  )
}

export { AppRoutes }
