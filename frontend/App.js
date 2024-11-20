import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Users from './components/Users';

const App = () => (
  <Router>
    <Routes>
      <Route path="/users" element={<Users />} />
      {/* Add Routes for Roles and Permissions */}
    </Routes>
  </Router>
);

export default App;
