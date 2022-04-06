import styled from "styled-components"

const Content = styled.div`
  padding: 0px 10px;

  font-size: 20px;
`

const ProductInfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`

const ProductNameAndIcon = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`

const ProductIcon = styled.div`
  svg {
    height: 36px;
    width: 36px;
  }
`

const AmountRowWraper = styled.div`
  width: 100%;
  display: flex;

  justify-content: center;
`

const AmountRow = styled.div`
  font-size: 18px;
  width: 150px;

  display: flex;

  align-items: center;
`

const Unit = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-left: 5px;
`

const SumRow = styled.div`
  margin-top: 20px;

  width: 100%;
  display: flex;
  justify-content: center;

  font-size: 18px;
  font-weight: bold;
`

export {
  AmountRow,
  AmountRowWraper,
  Content,
  ProductInfoRow,
  ProductIcon,
  ProductNameAndIcon,
  Unit,
  SumRow,
}
