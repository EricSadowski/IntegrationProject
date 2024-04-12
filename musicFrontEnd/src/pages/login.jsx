import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loggedInUsername, setLoggedInUsername] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8081/login/submit', { 
        username,
        password
      });
      console.log('Login successful!');
      setLoggedInUsername(username); 
      setSuccess('Login successful!');
      setError('');
    } catch (error) {
      setError('Invalid username or password');
      setSuccess('');
    }
  };

  return (
    document.title="login",
    <div className='page-container'>
      <div className='register-form'>
        <h1 className='h1-not-home'>Login</h1>
        {loggedInUsername ? (
          <div>
            <h2>Welcome {loggedInUsername}</h2>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div>
              <label>Username:</label>
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <br />
            <div>
              <label>Password:</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <br />
            <button type="submit">Login</button>
            {error && <div className="error">{error}</div>}
            {success && <div className="success">{success}</div>}
          </form>
        )}
      </div>
    </div>
  );
}

export default Login;
