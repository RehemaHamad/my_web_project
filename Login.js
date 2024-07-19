import React, { useState } from 'react';
import './Login.css';

import { Link } from 'react-router-dom';

// In Login.js, replace the existing anchor tag with:
<Link style={{ textDecoration: 'none' }} to="/StudentRegistration">I don't have account</Link>


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (username === 'User' && password === 'password') {
            alert('Login successful');
            window.location.href = 'StudentRegistration';
        } else if (username === 'Admin' && password === 'password') {
            alert('Login successful');
            window.location.href = 'AdminDashboard';
        } else {
            alert('Invalid username or password');
        } 
    };

    return (
        <div className="container1" id="loginContainer">
            <h1>LOGIN</h1>
            <form id="loginForm" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">User Name:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="loginPassword">Password:</label>
                    <input
                        type="password"
                        id="loginPassword"
                        name="loginPassword"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">LOGIN</button>
            </form>
            <br /><br />
            <p>
            <a href="/StudentRegistration"> I don't have account </a>
            </p>
            
        </div>
    );
};

export default Login;
