import React, { useState, useEffect } from 'react';
import { fetchRoles, createRole, updateRole, deleteRole } from '../services/api';

const Roles = () => {
  const [roles, setRoles] = useState([]);
  const [newRole, setNewRole] = useState('');

  useEffect(() => {
    fetchRoles().then((res) => setRoles(res.data));
  }, []);

  const handleAddRole = () => {
    createRole({ name: newRole, permissions: [] }).then((res) => {
      setRoles([...roles, res.data]);
      setNewRole('');
    });
  };

  const handleDeleteRole = (id) => {
    deleteRole(id).then(() => {
      setRoles(roles.filter((role) => role._id !== id));
    });
  };

  return (
    <div>
      <h2>Role Management</h2>
      <input
        type="text"
        placeholder="Add new role"
        value={newRole}
        onChange={(e) => setNewRole(e.target.value)}
      />
      <button onClick={handleAddRole}>Add Role</button>
      <ul>
        {roles.map((role) => (
          <li key={role._id}>
            {role.name}
            <button onClick={() => handleDeleteRole(role._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Roles;
