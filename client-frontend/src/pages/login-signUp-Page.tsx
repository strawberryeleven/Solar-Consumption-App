import React, { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [loginMessage, setLoginMessage] = useState('');

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const url = 'http://localhost:8081/users';
    const queryParams = `?email=${email}&password=${password}`;
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    };
  
    try {
      if (isLogin) {
        // Handle login
        const response = await fetch(url + queryParams, options);
        const message = await response.text();
        setLoginMessage(message); // Set the login message received from the server
      } else {
        // Handle signup
        if (password !== confirmPassword) {
          setLoginMessage("Passwords don't match");
          return;
        }
        
        // Frontend validation passed, proceed with signup
        // You can send a POST request to your backend to handle signup
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle error
    }
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: 'lightgrey' }}>
      <div className="card p-4 shadow rounded" style={{ width: '400px' }}>
        <h2 className="mb-4">{isLogin ? 'Login' : 'Sign Up'}</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {!isLogin && (
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          )}

          <button type="submit" className="btn btn-primary">{isLogin ? 'Login' : 'Sign Up'}</button>
        </form>

        <p className="mt-3">{isLogin ? "Don't have an account? " : "Already have an account? "}
          <span className="text-primary" style={{cursor: 'pointer'}} onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Sign Up' : 'Login'}
          </span>
        </p>

        {/* Display login message */}
        {loginMessage && <p>{loginMessage}</p>}
      </div>
    </div>
  );
};

export default LoginPage;
