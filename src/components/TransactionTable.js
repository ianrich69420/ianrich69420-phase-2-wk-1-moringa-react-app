import React from 'react';
import TransactionRow from "./TransactionRow"

function TransactionTable({ transactions, search }) {
  const filteredTransactions = transactions.filter(transactions => transactions.description.includes(search))

  const rows = [];
  for (const transaction of filteredTransactions) {
      rows.push(<TransactionRow key={transaction.id} date={transaction.date} description={transaction.description} category={transaction.category} amount={transaction.amount} />)
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  )
}


export default TransactionTable