import React, { useState } from 'react';

const MyWork = () => {
  const [balance, setBalance] = useState(500); // Default balance
  const [amount, setAmount] = useState('');
  const [transactions, setTransactions] = useState([]);

  const handleRecharge = (e) => {
    e.preventDefault();
    const rechargeAmount = parseFloat(amount);

    if (rechargeAmount > 0) {
      setBalance(balance + rechargeAmount);
      setTransactions([
        ...transactions,
        { type: 'Recharge', amount: rechargeAmount, date: new Date().toLocaleString() },
      ]);
      setAmount('');
    } else {
      alert('Please enter a valid amount');
    }
  };

  return (
    <div className="my-work-container">
      <div className="balance-section">
        <h3>Account Balance: ₹{balance.toFixed(2)}</h3>
        <form onSubmit={handleRecharge} className="recharge-form">
          <label htmlFor="amount">Recharge Amount:</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            required
          />
          <button type="submit">Recharge</button>
        </form>
      </div>
      <div className="transaction-history">
        <h3>Transaction History</h3>
        {transactions.length === 0 ? (
          <p>No transactions yet.</p>
        ) : (
          <ul>
            {transactions.map((transaction, index) => (
              <li key={index}>
                <span>{transaction.type}</span> of ₹{transaction.amount.toFixed(2)} on{' '}
                {transaction.date}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default MyWork;
