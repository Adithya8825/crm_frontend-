// src/login.js
<<<<<<< HEAD

import React, { useState } from 'react';
import './login.css'; // Keep your custom styles
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import navigate hook
=======
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './login.css';
import axios from 'axios';
>>>>>>> f8462e0 (Initial commit from crm_frontend--main)

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
<<<<<<< HEAD
  const navigate = useNavigate(); // initialize navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
=======
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
>>>>>>> f8462e0 (Initial commit from crm_frontend--main)

    try {
      const response = await axios.post('http://localhost:8000/api/token/', {
        username: email,
<<<<<<< HEAD
        password: password
      });

      console.log('Login successful:', response.data);
      // Redirect to dashboard
      navigate('/dashboard');
    } catch (error) {
      console.error('Login error:', error);
      alert('Invalid credentials');
=======
        password: password,
      });

      console.log('Login successful:', response.data);
      // Store token if needed
      navigate('/dashboard');
    } catch (error) {
      setErrorMsg('Invalid username or password');
>>>>>>> f8462e0 (Initial commit from crm_frontend--main)
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
<<<<<<< HEAD
        <h2 className="login-title">Log in</h2>
        <input
          type="text"
          placeholder="johndoe"
=======
        <h2 className="login-title">Welcome Back</h2>

        {errorMsg && (
          <div className="mb-4 p-2 bg-red-100 text-red-700 text-sm rounded">
            {errorMsg}
          </div>
        )}

        <input
          type="text"
          placeholder="Username or Email"
>>>>>>> f8462e0 (Initial commit from crm_frontend--main)
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
<<<<<<< HEAD
          placeholder="Password"
=======
          placeholder="••••••••"
>>>>>>> f8462e0 (Initial commit from crm_frontend--main)
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
<<<<<<< HEAD
        <button type="submit">Log in</button>
        <p className="signup-text">or, <a href="#">sign up</a></p>
=======

        <button type="submit">
          Log in
        </button>

        <p className="signup-text">
          or,&nbsp;
          <NavLink
            to="/dashboard"
            className="hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login as Guest
          </NavLink>
        </p>
>>>>>>> f8462e0 (Initial commit from crm_frontend--main)
      </form>
    </div>
  );
}

export default Login;
