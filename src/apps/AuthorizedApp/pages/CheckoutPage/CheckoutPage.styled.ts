import styled from "styled-components"
import { Button } from "../../../../components/Button"

const Container = styled.div`
  height: 100%;
  width: 100%;

  background-color: #002ab1;
  color: white;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Header = styled.h2`
  margin-bottom: 15px;
`

const Description = styled.div`
  font-size: 18px;
  margin-bottom: 20px;
`

const BalanceValue = styled.div<{ color: string }>(
  ({ color }) => `
  font-size: 22px;
  font-weight: bold;
  margin: 20px 0px;

  color: ${color};
`
)

const Symbol = styled.div`
  font-size: 22px;
`

const CheckoutButton = styled(Button)`
  color: white;
  background-color: #ff7f01;

  max-width: 250px;
  margin-bottom: 15px;
`

export { BalanceValue, CheckoutButton, Container, Description, Header, Symbol }
