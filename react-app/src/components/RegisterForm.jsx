import React from 'react';
import axios from 'axios';

function RegisterForm() {
  const handleRegister = (event) => {
    event.preventDefault();

    const username = document.querySelector('.name').value;
    const password = document.querySelector('.passwd').value;

    axios
      .post('http://localhost:5000/api/users/register', { username, password })
      .then((response) => {
        alert(response.data.message);
      })
      .catch((error) => {
        alert(`Error: ${error.response?.data?.message || 'Registration failed'}`);
      });
  };

  return (
    <div>
      <h1>Register</h1>
      <form>
        <label>Username:</label>
        <input type="text" className="name" />
        <br />
        <label>Password:</label>
        <input type="password" className="passwd" />
        <br />
        <button type="submit" onClick={handleRegister}>
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;
