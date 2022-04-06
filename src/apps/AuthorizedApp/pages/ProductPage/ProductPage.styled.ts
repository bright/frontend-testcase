import styled from "styled-components"

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;

  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 15px;
  margin: 30px;

  padding: 20px;

  @media (max-width: 800px) {
    padding: 0px;
    padding-bottom: 50px;
    grid-template-columns: 1fr;

    margin: 0px;
    box-shadow: none;
  }
`

const HideMobile = styled.div`
  @media (max-width: 800px) {
    display: none;
  }
`

const HideDesktop = styled.div`
  @media (min-width: 800px) {
    display: none;
  }
`

export { ContentContainer, HideDesktop, HideMobile }
