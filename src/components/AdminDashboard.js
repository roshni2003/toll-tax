// src/components/AdminDashboard.js

import React from 'react';
import SystemSettings from './SystemSettings';  // Component for system settings
import RoleManagement from './RoleManagement';  // Component for role management

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard-container">
      <h2>Admin Dashboard</h2>

      {/* Operations Monitoring */}
      <div>
        <h3>Operations Overview</h3>
        <div className="stats">
                <div className="stat-item">
                    <h3>Total Toll Transactions</h3>
                    <p>1,245</p>
                    <p>Total Revenue: $4,250</p>
                </div>
                <div className="stat-item">
                    <h3>Active Vehicles Identified</h3>
                    <p>102</p>
                    <p>Vehicles Today: 350</p>
                </div>
                <div className="stat-item">
                    <h3>Account Balance Overview</h3>
                    <p>Total Active Accounts: 2,500</p>
                    <p>Average Balance: $30</p>
                </div>
                <div className="stat-item">
                    <h3>Employee Stats</h3>
                    <p>Employees Logged In: 5</p>
                    <p>Admin Permissions Updated: 2</p>
                </div>
            </div>
            <div className="alerts">
                <h3>System Status</h3>
                <p>System Status: Operational</p>
                <p>No ongoing issues</p>
            </div>
            <div className="recent-activities">
                <h3>Recent Activities</h3>
                <p>Recent Payments: 15 transactions completed</p>
                <p>Account Updates: 5 accounts updated today</p>
            </div>
      </div>

      {/* Manage Employee Roles */}
      <RoleManagement />

      {/* System Settings */}
      <SystemSettings />
    </div>
  );
};

export default AdminDashboard;
