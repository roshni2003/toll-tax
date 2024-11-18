// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home'; // Import the Home component
import Login from './components/Login';
import SignUp from './components/SignUp';
import MyWork from './components/MyWork'; // New page
import VehicleIdentification from './components/VehicleIdentification';
import TollCollection from './components/TollCollection';
import AdminDashboard from './components/AdminDashboard';
import './styles.css';

const App = () => {
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} /> {/* Home route */}
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/my-work" element={<MyWork />} /> {/* New route */}
                    <Route path="/vehicle-identification" element={<VehicleIdentification />} />
                    <Route path="/toll-collection" element={<TollCollection />} />
                    <Route path="/admin-dashboard" element={<AdminDashboard />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
