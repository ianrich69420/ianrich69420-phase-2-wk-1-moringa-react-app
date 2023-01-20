import React from 'react';
import TransactionTable from './TransactionTable';

function FilterableTransactionTable({ transactions, search }) {
    return (
        <div>
            <TransactionTable transactions={transactions} search={search}/>
        </div>
    )
}

export default FilterableTransactionTable