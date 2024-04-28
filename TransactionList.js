import React, { useContext } from 'react';
import Transaction from '../components/Transaction'
import { GlobalContext } from '../context/GlobalState';

function TransactionList(){
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <center>
      <ul className="list">
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
      </ul>
      </center>
    </>
  )
}

export default TransactionList