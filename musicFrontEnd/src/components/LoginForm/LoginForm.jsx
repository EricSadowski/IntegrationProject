import React, { useState } from 'react';
import axios from 'axios';
import './LoginForm.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [visible, setVisible] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8081/login/submit', {
        username,
        password
      });
      console.log('Login successful!');
      setVisible(false);
    } catch (error) {
      setError('Invalid username or password');
    }
  };

  const handleClose = () => {
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <div className='page-container'>
      <div className='register-form'>
        <h1 className='login-header'>Login<span className="close-button" onClick={handleClose}>X</span></h1>
        <br />
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
        </form>        
      </div>
    </div>
  );
};

export default LoginForm;
