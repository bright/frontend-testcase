import styled from "styled-components"

const Button = styled.button`
  background-color: #002ab1;
  color: #ffffff;

  font-size: 16px;
  font-family: "Open Sans", sans-serif;

  height: 38px;
  width: 100%;

  border-radius: 4px;

  &:disabled {
    opacity: 0.5;
  }
`

export { Button }
