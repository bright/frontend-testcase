import styled from "styled-components"

const PageWrapper = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  justify-content: center;
`

const ContentWrapper = styled.div`
  height: 100%;
  width: 100%;
  max-width: 500px;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`
export { ContentWrapper, PageWrapper }
