import React, { useState, useEffect } from 'react';
import { fetchPermissions, createPermission, deletePermission } from '../services/api';

const Permissions = () => {
  const [permissions, setPermissions] = useState([]);
  const [newPermission, setNewPermission] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    fetchPermissions().then((res) => setPermissions(res.data));
  }, []);

  const handleAddPermission = () => {
    createPermission({ name: newPermission, description }).then((res) => {
      setPermissions([...permissions, res.data]);
      setNewPermission('');
      setDescription('');
    });
  };

  const handleDeletePermission = (id) => {
    deletePermission(id).then(() => {
      setPermissions(permissions.filter((perm) => perm._id !== id));
    });
  };

  return (
    <div>
      <h2>Permission Management</h2>
      <input
        type="text"
        placeholder="Permission Name"
        value={newPermission}
        onChange={(e) => setNewPermission(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleAddPermission}>Add Permission</button>
      <ul>
        {permissions.map((permission) => (
          <li key={permission._id}>
            {permission.name} - {permission.description}
            <button onClick={() => handleDeletePermission(permission._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Permissions;
