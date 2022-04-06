import { Button } from "@wfp/ui"
import styled from "styled-components"

const Container = styled.div`
  height: 100%;
  width: 100%;

  background-color: #00d684;
  color: white;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const SuccessIconContainer = styled.div`
  svg {
    height: 225px;
    width: 225px;
  }
`

const Description = styled.div`
  margin-top: 30px;
  color: white;
  font-size: 18px;
`

const TransactionAmount = styled.div`
  margin-top: 30px;
  margin-bottom: 50px;

  color: #002ab1;
  font-size: 24px;
  font-weight: bold;
`

const ConfirmButton = styled(Button)`
  color: #002ab1;
  background-color: #ffffff;
`

export {
  ConfirmButton,
  Container,
  Description,
  SuccessIconContainer,
  TransactionAmount,
}
