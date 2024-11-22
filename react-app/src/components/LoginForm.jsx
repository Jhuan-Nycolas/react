import React from 'react';
import axios from 'axios';

function LoginForm() {
  const handleLogin = (event) => {
    event.preventDefault();

    const username = document.querySelector('.name').value;
    const password = document.querySelector('.passwd').value;

    axios
      .post('http://localhost:5000/api/users/login', { username, password })
      .then((response) => {
        alert(response.data.message);
      })
      .catch((error) => {
        alert(`Error: ${error.response?.data?.message || 'Login failed'}`);
      });
  };

  return (
    <div>
      <h1>Login</h1>
      <form>
        <label>Username:</label>
        <input type="text" className="name" />
        <br />
        <label>Password:</label>
        <input type="password" className="passwd" />
        <br />
        <button type="submit" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
