import { render, screen, within } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import React, { ReactElement } from "react"
import { BrowserRouter } from "react-router-dom"
import { mockedUser } from "../../../../../services/auth/"
import { AuthContext } from "../../../../../services/auth/context/context"
import { BasketContextProvider } from "../../../services/basket/context"
import { mockedProducts } from "../../../services/products"
import { ProductPage } from "../ProductPage"

const MockedAuthContextWrapper: React.FC = ({ children }) => (
  <AuthContext.Provider
    value={{
      isAuthenticated: true,
      authData: { user: mockedUser, isAuthenticated: true },
      login: () => {},
      logout: () => {},
      pay: () => {},
    }}
  >
    {children}
  </AuthContext.Provider>
)

const withWrappers = (children: ReactElement) => (
  <BrowserRouter>
    <MockedAuthContextWrapper>
      <BasketContextProvider>{children}</BasketContextProvider>
    </MockedAuthContextWrapper>
  </BrowserRouter>
)

describe("ProductPage component", () => {
  describe("Products section", () => {
    it("renders all mocked products", async () => {
      render(withWrappers(<ProductPage />))

      await screen.findByText("Select purchase items")
      mockedProducts.forEach(({ name }) => screen.getByText(name))
    })
  })

  describe("Basket section", () => {
    it("displays correct wallet and basket balance by default", async () => {
      render(withWrappers(<ProductPage />))

      await screen.findByText("Purchase card")
      const purchaseCard = await screen.findByLabelText("Purchase card")

      const expectedWalletBalance = mockedUser.wallet.balance
      expect(
        within(purchaseCard).getByLabelText("Wallet balance")
      ).toHaveTextContent(`₿ ${expectedWalletBalance}`)

      expect(
        within(purchaseCard).getByLabelText("Basket balance")
      ).toHaveTextContent(`₿ 0.00`)
    })

    describe("when product is added to the basket", () => {
      it("displays this product and basket balance", async () => {
        render(withWrappers(<ProductPage />))

        const mockedFirstProduct = mockedProducts[0]

        // Select item on the grid
        const purchaseItemsSection = await screen.findByLabelText(
          "Purchase items"
        )
        const firstProduct = await within(purchaseItemsSection).findByText(
          mockedFirstProduct.name
        )
        userEvent.click(firstProduct)

        // Add item to the basket
        const addButton = await screen.findByText(
          `ADD ₿ ${mockedFirstProduct.price.toFixed(2)}`
        )
        userEvent.click(addButton)

        // Check if the item is displayed in the basket
        const purchaseCard = await screen.findByLabelText("Purchase card")
        // balance
        expect(
          within(purchaseCard).getByLabelText("Basket balance")
        ).toHaveTextContent(`₿ ${mockedFirstProduct.price.toFixed(2)}`)
        // card
        within(purchaseCard).getByText(mockedFirstProduct.name)
      })
    })
  })
})
