// src/pages/TollCollection.js

import React, { useState } from 'react';

const TollCollection = () => {
  const [accountBalance, setAccountBalance] = useState(1000); // Mock balance
  const [tollAmount, setTollAmount] = useState(0); // Initialize toll amount as 0
  const [manualPayment, setManualPayment] = useState('');
  const [receipt, setReceipt] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [adminTollTax, setAdminTollTax] = useState(''); // State for admin to set toll

  const handleSetTollTax = () => {
    const toll = parseFloat(adminTollTax);
    if (!isNaN(toll) && toll > 0) {
      setTollAmount(toll);
      setAdminTollTax('');
      setErrorMessage('');
    } else {
      setErrorMessage('Please enter a valid toll tax amount.');
    }
  };

  const handleAutoDeduction = () => {
    if (tollAmount === 0) {
      setErrorMessage('Toll tax is not set. Please set it first.');
      return;
    }

    if (accountBalance >= tollAmount) {
      setAccountBalance(accountBalance - tollAmount);
      generateReceipt('Automatic Deduction');
      setErrorMessage('');
    } else {
      setErrorMessage('Insufficient balance for automatic deduction.');
    }
  };

  const handleManualPayment = () => {
    const payment = parseFloat(manualPayment);
    if (!isNaN(payment) && payment >= tollAmount) {
      generateReceipt('Manual Payment', payment);
      setErrorMessage('');
      setManualPayment('');
    } else {
      setErrorMessage('Please enter a valid payment amount equal to or greater than the toll.');
    }
  };

  const generateReceipt = (paymentType, paidAmount = tollAmount) => {
    const receiptData = {
      date: new Date().toLocaleString(),
      tollAmount: paidAmount,
      paymentType,
    };
    setReceipt(receiptData);
  };

  return (
    <div className="toll-collection-container">
      <h1>Toll Collection</h1>

      {/* Toll Tax Setter */}
      <div className="set-toll-section">
        <h3>Set Toll Tax</h3>
        <input
          type="number"
          placeholder="Enter toll tax amount"
          value={adminTollTax}
          onChange={(e) => setAdminTollTax(e.target.value)}
          className="input-field"
        />
        <button onClick={handleSetTollTax} className="set-toll-button">
          Set Toll Tax
        </button>
      </div>

      {/* Display Current Toll */}
      {tollAmount > 0 && <p><strong>Current Toll Tax:</strong> ₹{tollAmount.toFixed(2)}</p>}

      {/* Automatic Deduction Section */}
      <div className="account-section">
        <p><strong>Account Balance:</strong> ₹{accountBalance.toFixed(2)}</p>
        <button onClick={handleAutoDeduction} className="auto-deduction-button">
          Deduct Automatically
        </button>
      </div>

      {/* Manual Payment Section */}
      <div className="manual-payment-section">
        <h3>Manual Payment</h3>
        <input
          type="number"
          placeholder="Enter payment amount"
          value={manualPayment}
          onChange={(e) => setManualPayment(e.target.value)}
          className="input-field"
        />
        <button onClick={handleManualPayment} className="manual-payment-button">
          Pay Manually
        </button>
      </div>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      {/* Receipt Section */}
      {receipt && (
        <div className="receipt-section">
          <h3>Digital Receipt</h3>
          <p><strong>Date:</strong> {receipt.date}</p>
          <p><strong>Amount Paid:</strong> ₹{receipt.tollAmount.toFixed(2)}</p>
          <p><strong>Payment Type:</strong> {receipt.paymentType}</p>
        </div>
      )}
    </div>
  );
};

export default TollCollection;
