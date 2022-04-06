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

const AuthElementWrapper = styled.div`
  width: 100%;
  padding: 20px 0px;
`

const LoginButtonWrapper = styled.div`
  margin-top: 15px;
  width: 100%;
`

const FingerPrintWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #002ab1;

  height: 124px;
  width: 124px;

  border-radius: 50%;

  margin-bottom: 10px;
`

export { AuthElementWrapper, LoginButtonWrapper, FingerPrintWrapper, Form }
