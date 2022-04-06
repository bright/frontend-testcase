import styled from "styled-components"

const Form = styled.form`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  padding: 15px;
`

const Description = styled.p`
  margin: 30px;
`

const HandIconWrapper = styled.div`
  margin: 30px;
`

const FingerPrintWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #f5f5f5;

  height: 124px;
  width: 124px;

  border-radius: 50%;

  margin-bottom: 40px;
`

export { Description, HandIconWrapper, Form, FingerPrintWrapper }
