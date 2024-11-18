import React from 'react';

const UserManagement = () => {
    return (
        <section className="user-management">
            <h2>User Management</h2>
            <form>
                <label>
                    Username:
                    <input type="text" name="username" required />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" required />
                </label>
                <button type="submit">Login</button>
            </form>
            <button>Register</button>
        </section>
    );
};

export default UserManagement;
