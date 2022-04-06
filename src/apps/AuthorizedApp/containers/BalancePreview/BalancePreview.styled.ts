import styled from "styled-components"

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`

const BalanceValue = styled.div`
  font-weight: bold;
  font-size: 18px;
`

const BasketBalance = styled.div`
  display: flex;
  gap: 10px;
`

const BasketIcon = styled.div`
  svg {
    height: 18px;
    width: 18px;
    fill: #ff7f01;
  }
`

export { BalanceValue, BasketBalance, BasketIcon, Container }
