import { useAuthContext } from "../../../../services/auth/context"
import { TransactionRow } from "./components/TransactionRow/TransactionRow"

import * as S from "./TransactionHistoryList.styled"

const TransactionHistoryList = () => {
  const {
    authData: { user },
  } = useAuthContext()

  if (!user) {
    return <div>User is not logged in</div>
  }

  return (
    <S.ListWrapper>
      {user.transactionHistory.map((transaction) => (
        <TransactionRow key={transaction.id} transaction={transaction} />
      ))}
    </S.ListWrapper>
  )
}

export { TransactionHistoryList }
