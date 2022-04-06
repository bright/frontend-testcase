import styled from "styled-components"

const CardImageWrapper = styled.div<{ selected: boolean }>(
  ({ selected }) => `
  display: flex;
  justify-content: center;
  align-items: center;

  height: 90px;
  width: 90px;

  border-radius: 50%;

  background-color: ${selected ? `#FF7F01` : `#f5f5f5`};

  svg {
    height: 45px;
    width: 45px;
  }
`
)

const CardTitle = styled.div`
  margin-top: 15px;
  font-size: 14px;
`

const Card = styled.div`
  cursor: pointer;
  margin: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export { Card, CardTitle, CardImageWrapper }
