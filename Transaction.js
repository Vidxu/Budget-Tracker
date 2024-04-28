import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

function moneyFormatter(num) {
  let p = num.toFixed(2).split('.');
  return (
    '₹ ' +
    p[0]
      .split('')
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
      }, '') +
    '.' +
    p[1]
  );
}

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? '-' : '+';

  const handleDelete = () => {
    deleteTransaction(transaction.id);
  };

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.text} <span>{sign}{moneyFormatter(Math.abs(transaction.amount))}</span>
      <button onClick={handleDelete} className="delete-btn">x</button>
    </li>
  );
};

export default Transaction;
