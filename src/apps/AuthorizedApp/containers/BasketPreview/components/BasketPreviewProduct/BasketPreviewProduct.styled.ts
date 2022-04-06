import styled from "styled-components"

const Container = styled.div`
  display: flex;
  align-items: center;

  gap: 12px;
`

const Image = styled.div`
  svg {
    height: 26px;
    width: 26px;
  }
`

const NameAndPrice = styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;
`

export { Container, Image, NameAndPrice }
