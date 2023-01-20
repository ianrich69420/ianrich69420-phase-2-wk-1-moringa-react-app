import React, { useEffect, useState } from 'react'
import './App.css';
import FilterableTransactionTable from './components/FilterableTransactionTable';
import AddTransaction from './components/AddTransaction';
import SearchBar from './components/SearchBar';

function App() {
  const [transactions, setTransactions] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/ianrich69420/phase-2-wk-1-moringa-react-app-json-server/transactions")
      .then(r => r.json())
      .then(transactions => setTransactions(transactions))
  }, [])

  function addTransaction(newTransaction) {
    const updatedTransactions = [...transactions, newTransaction]
    setTransactions(updatedTransactions);
  }

  function handleSearch(searchTerm) {
    setSearch(searchTerm)
  }
  
  return (
    <div>
      <SearchBar search={search} onSearch={handleSearch}/>
      <AddTransaction onAddTransaction={addTransaction}/>
      <FilterableTransactionTable transactions={transactions} search={search}/>
    </div>
  )
}

export default App;
