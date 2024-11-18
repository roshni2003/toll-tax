import React, { useState, useEffect } from 'react';

const MyWork = () => {
  const loggedInUser = localStorage.getItem('loggedInUser'); // Retrieve logged-in user's email
  const [balance, setBalance] = useState(0); // Default balance
  const [amount, setAmount] = useState('');
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Load user data from localStorage
    const userData = JSON.parse(localStorage.getItem(loggedInUser)) || {};
    setBalance(userData.balance || 0);
    setTransactions(userData.transactions || []);
  }, [loggedInUser]);

  const handleRecharge = (e) => {
    e.preventDefault();
    const rechargeAmount = parseFloat(amount);

    if (rechargeAmount > 0) {
      const newBalance = balance + rechargeAmount;
      const newTransactions = [
        ...transactions,
        { type: 'Recharge', amount: rechargeAmount, date: new Date().toLocaleString() },
      ];

      setBalance(newBalance);
      setTransactions(newTransactions);
      setAmount('');

      // Update localStorage
      localStorage.setItem(
        loggedInUser,
        JSON.stringify({ balance: newBalance, transactions: newTransactions })
      );
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
