import styled from "styled-components"

const Row = styled.div`
  width: 100%;
  display: grid;

  grid-template-columns: 3fr 1fr 1fr;

  align-items: center;

  padding: 15px 0px;

  border-bottom: 1px solid #b0b0b0;

  :first-of-type {
    border-top: 1px solid #b0b0b0;
  }
`

const Amount = styled.div``

const Sum = styled.div``

export { Amount, Row, Sum }
