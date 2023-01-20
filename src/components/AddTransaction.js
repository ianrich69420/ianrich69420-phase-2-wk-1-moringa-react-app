import React, { useState } from 'react';

function AddTransaction({ onAddTransaction }) {
  const[date, setDate] = useState("")
  const[description, setDescription] = useState("")
  const[category, setCategory] = useState("")
  const[amount, setAmount] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    const transObj = {
      transaction: {
        "date": date,
        "description": description,
        "category": category,
        "amount": amount 
      }
    }

    fetch("https://my-json-server.typicode.com/ianrich69420/phase-2-wk-1-moringa-react-app-json-server/transactions", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(transObj)
  })
      .then(r => r.json())
      .then(data => onAddTransaction(data.transaction))
  }

  return (
    <div>
      <h2>Add a Transaction!</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Date" value={date} onChange={e => setDate(e.target.value)}/>
        <input type="text" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)}/>
        <input type="text" placeholder="Category" value={category} onChange={e => setCategory(e.target.value)}/>
        <input type="text" placeholder="Amount" value={amount} onChange={e => setAmount(e.target.value)}/>
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  )
}
  
  export default AddTransaction
