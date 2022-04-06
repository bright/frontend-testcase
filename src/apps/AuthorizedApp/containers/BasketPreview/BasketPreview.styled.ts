import styled from "styled-components"

const Header = styled.h2`
  margin-bottom: 15px;

  @media (min-width: 800px) {
    border-bottom: 10px;
  }
`

const BasketButtonWrapper = styled.div`
  width: 100%;
  margin: 20px 0px;
  padding: 0px 10px;

  display: flex;
  justify-content: flex-end;
`

const Container = styled.div`
  max-width: 500px;
`

const RowsContainer = styled.div`
  margin-top: 10px;
`

export { BasketButtonWrapper, Container, Header, RowsContainer }
