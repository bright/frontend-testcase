import { Story } from "@wfp/ui"
import { PageLayout } from "../../containers/PageLayout"
import { TransactionHistoryList } from "../../containers/TransactionHistoryList"

import * as S from "./TransactionHistoryPage.styled"

const TransactionHistoryPage = () => {
  return (
    <PageLayout>
      <>
        <Story>
          <h2>Purchase history</h2>
        </Story>

        <S.HistoryWrapper>
          <TransactionHistoryList />
        </S.HistoryWrapper>
      </>
    </PageLayout>
  )
}

export { TransactionHistoryPage }
