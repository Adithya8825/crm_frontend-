// src/login.js

import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './login.css';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    try {
      const response = await axios.post('http://localhost:8000/api/token/', {
        username: email,
        password: password,
      });

      console.log('Login successful:', response.data);
      // You can store the token here if needed
      // localStorage.setItem('token', response.data.access);

      navigate('/dashboard');
    } catch (error) {
      console.error('Login error:', error);
      setErrorMsg('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-title">Welcome Back</h2>

        {errorMsg && (
          <div className="mb-4 p-2 bg-red-100 text-red-700 text-sm rounded">
            {errorMsg}
          </div>
        )}

        <input
          type="text"
          placeholder="Username or Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Log in</button>

        <p className="signup-text">
          or,&nbsp;
          <NavLink
            to="/dashboard"
            className="hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login as Guest
          </NavLink>
        </p>
      </form>
    </div>
  );
}

export default Login;
