import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    // Check authentication state on component mount
    useEffect(() => {
        const authState = localStorage.getItem('isAuthenticated');
        setIsAuthenticated(authState === 'true');
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('isAuthenticated'); // Clear authentication state
        setIsAuthenticated(false);
        navigate('/login'); // Redirect to the login page
    };

    return (
        <header className="header">
            <h1>Toll Tax Management System</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/" className='headtxt'>Home</Link>
                    </li>
                    <li >
                        <Link to="/vehicle-identification" className='headtxt'>Vehicle Identification</Link>
                    </li>
                    <li >
                        <Link to="/toll-collection"className='headtxt'>Toll Collection</Link>
                    </li>
                    <li >
                        <Link to="/admin-dashboard" className='headtxt'>Admin Dashboard</Link>
                    </li >
                    {isAuthenticated && (
                        <li >
                            <Link to="/my-work" className='headtxt'>My Activity</Link>
                        </li>
                    )}
                    <li >
                        {isAuthenticated ? (
                            <button onClick={handleLogout} className="logout-button">
                                Log Out
                            </button>
                        ) : (
                            <Link to="/login" className='headtxt'>Login</Link>
                        )}
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
