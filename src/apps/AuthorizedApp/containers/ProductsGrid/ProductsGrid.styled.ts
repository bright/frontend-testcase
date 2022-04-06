import styled from "styled-components"

const Grid = styled.div`
  display: flex;
  flex-direction: row;

  flex-wrap: wrap;

  @media (min-width: 800px) {
    margin-top: 10px;
    border-right: 1px solid #b0b0b0;
    margin-right: 20px;
  }
`

export { Grid }
