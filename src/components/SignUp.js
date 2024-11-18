import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {addUser } from "../utils/userData";
import './SignUp.css';
const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    if (addUser(email, password)) {
      setMessage('Account created successfully!');
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } else {
      setMessage('Error creating account. Please try again.');
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <form onSubmit={handleSignup}>
          <h2 className="signup-title">Sign Up</h2>
          {message && <p className="success-message">{message}</p>}
          <label>Email</label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input-field"
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="input-field"
          />
          <button className="signup-button" type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
