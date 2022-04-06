import styled from "styled-components"
import { Button } from "../../../../components/Button"

const UserMenuWrapper = styled.div`
  padding: 15px;

  border: 1px solid #b0b0b0;
  border-top: none;
`

const LogoutButton = styled(Button)`
  margin-top: 15px;
`

const AccountBalance = styled.div`
  display: flex;
  align-items: center;

  gap: 8px;
`

const WalletIcon = styled.div`
  padding-top: 2px;
  svg {
    height: 25px;
    width: 25px;
  }
`

const Content = styled.div`
  height: 80vh;
  overflow-y: scroll;
`

export { AccountBalance, Content, LogoutButton, UserMenuWrapper, WalletIcon }
