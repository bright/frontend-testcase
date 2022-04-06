import { UserTransaction } from "../../../../../../services/auth/types"

import * as S from "./TransactionRow.styled"

interface Props {
  transaction: UserTransaction
}

const TransactionRow = ({ transaction }: Props) => {
  return (
    <S.Row>
      <div>
        <div>{transaction.date.toLocaleString()}</div>
        <div>{transaction.id}</div>
      </div>
      <div>₿ {transaction.amount}</div>
    </S.Row>
  )
}

export { TransactionRow }
