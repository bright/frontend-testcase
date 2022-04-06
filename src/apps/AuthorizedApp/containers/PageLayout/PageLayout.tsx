import { MainNavigation, MainNavigationItem, User, Wrapper } from "@wfp/ui"
import { ReactElement } from "react"
import { Link } from "react-router-dom"
import WalletIcon from "../../../../components/Icons/WalletIcon"
import { useAuthContext } from "../../../../services/auth/context"
import * as S from "./PageLayout.styled"

interface Props {
  children: ReactElement
}

const PageLayout = ({ children }: Props) => {
  const {
    authData: { user },
    logout,
  } = useAuthContext()

  return (
    <>
      <MainNavigation pageWidth="lg" logo={<Link to="/products">POS</Link>}>
        <MainNavigationItem onChangeSub={() => {}}>
          <Link to="/products">📋 Products</Link>
        </MainNavigationItem>

        <MainNavigationItem onChangeSub={() => {}}>
          <Link to="/basket">🧺 Basket</Link>
        </MainNavigationItem>

        <MainNavigationItem onChangeSub={() => {}}>
          <Link to="/history">🏦 Transaction history</Link>
        </MainNavigationItem>

        <MainNavigationItem
          onChangeSub={() => {}}
          className="wfp--main-navigation__user"
          subNavigation={
            <S.UserMenuWrapper>
              <h4>{`${user?.firstName} ${user?.lastName}`}</h4>

              <S.AccountBalance>
                <S.WalletIcon>
                  <WalletIcon />
                </S.WalletIcon>
                <div>₿ {user?.wallet.balance ?? 0}</div>
              </S.AccountBalance>

              <S.LogoutButton onClick={logout}>Logout</S.LogoutButton>
            </S.UserMenuWrapper>
          }
        >
          <User ellipsis title="Max Mustermann long name" />
        </MainNavigationItem>
      </MainNavigation>

      <Wrapper pageWidth="lg" spacing="md">
        <S.Content>{children}</S.Content>
      </Wrapper>
    </>
  )
}

export { PageLayout }
