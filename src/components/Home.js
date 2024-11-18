import React from 'react';

const Homepage = () => {

    return (
        <div className="homepage">
            <div className="container">
                <h5 className="heading">Welcome to the Toll Tax Management System!</h5>
                <p className="subheadings"> Your one-stop solution for managing toll tax operations seamlessly.</p>
                <div className="arrival-departure-container">
                    <div className="outer-box arrival-container">
                        <div className="inner-box arrival-inner-box">
                            <h5 className="subheading">About Us :</h5>
                            <ul className="body-text">
                                <li>Efficient Toll Tax Management</li>
                                <li>
                                    Automates toll collection and vehicle identification for seamless operations.
                                </li>
                                <li>Reduces congestion and saves time for commuters with real-time tracking.</li>
                                <li>Enhances resource optimization and improves overall traffic management.</li>
                                <li>Provides advanced analytics and reporting for data-driven decision-making.</li>
                                <li>Ensures a fast, secure, and user-friendly tolling experience.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="outer-box departure-container">
                        <div className="inner-box departure-inner-box">
                            <div className="line">💸 Fast, Reliable, & Secure 💸</div>
                            <div className="line">🚘 Toll Tax made Easy 🚘</div>
                            <div className="line">📊 Data-Driven Decisions for Better Operations 📊</div>
                            <div className="line">🛣️ Streamlining Toll Collection, One Click at a Time 🛣️</div>
                            <div className="line">🚦 Effortless Traffic Flow, Anytime, Anywhere 🚦</div>
                            <div className="line">💼 Smart Solutions for Modern Toll Management 💼</div>
                            <div className="line">🔒 Secure Transactions for Peace of Mind 🔒</div>
                            <div className="line">🌟 Your Gateway to Efficient Toll Operations 🌟</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Homepage;
