import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Users from './components/Users'; // Correct import path

function App() {
  return (
    <Router>
      <div>
        <h1>Admin Dashboard</h1>
        <Switch>
          <Route path="/users" component={Users} />
          {/* Add more routes as needed */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
