import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RegisterForm from './components/RegisterForm'; // Import the register form component
import LoginForm from './components/LoginForm'; // Import the login form component

function App() {
  return (
    <Router>
      <div>
        {/* Navigation Menu */}
        <nav style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </nav>

        {/* Route Definitions */}
        <Routes>
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
