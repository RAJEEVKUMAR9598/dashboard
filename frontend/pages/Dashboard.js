import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => (
  <div>
    <h1>Admin Dashboard</h1>
    <nav>
      <ul>
        <li><Link to="/users">User Management</Link></li>
        <li><Link to="/roles">Role Management</Link></li>
        <li><Link to="/permissions">Permission Management</Link></li>
      </ul>
    </nav>
  </div>
);

export default Dashboard;
