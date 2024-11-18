import React, { useState } from 'react';

const RoleManagement = () => {
  const [userRole, setUserRole] = useState('');
  const [notification, setNotification] = useState('');

  const handleRoleChange = (e) => {
    setUserRole(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userRole) {
      setNotification(`Role '${userRole}' assigned successfully.`);
    } else {
      setNotification('Please select a role.');
    }
    // Here, you can send this data to the backend or store it in local storage
  };

  return (
    <div className="role-management-container">
      <h3 className="role-management-title">Manage Employee Roles</h3>

      <form className="role-management-form" onSubmit={handleSubmit}>
        <label>Select Role:</label>
        <select value={userRole} onChange={handleRoleChange}>
          <option value="">--Select Role--</option>
          <option value="Admin">Admin</option>
          <option value="Manager">Manager</option>
          <option value="User">User</option>
        </select>

        <button type="submit">Assign Role</button>
      </form>

      {notification && (
        <div className={`notification ${notification.includes('success') ? 'success' : 'error'}`}>
          {notification}
        </div>
      )}
    </div>
  );
};

export default RoleManagement;
