import React from 'react'

function TransactionRow({ date, description, category, amount }) {
    return (
      <tr>
        <td>{date}</td>
        <td>{description}</td>
        <td>{category}</td>
        <td>{amount}</td>
      </tr>
    )
  }
  
  export default TransactionRow