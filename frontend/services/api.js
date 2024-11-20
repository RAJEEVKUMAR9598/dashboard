import axios from 'axios';

const API_BASE = 'http://localhost:5000/api';

export const fetchUsers = async () => axios.get(`${API_BASE}/users`);
export const createUser = async (data) => axios.post(`${API_BASE}/users`, data);
export const updateUser = async (id, data) => axios.put(`${API_BASE}/users/${id}`, data);
export const deleteUser = async (id) => axios.delete(`${API_BASE}/users/${id}`);

// Similarly, add functions for roles and permissions
