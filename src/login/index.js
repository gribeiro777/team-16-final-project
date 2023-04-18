import React, { useState } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission
  };

  return (
    <div className="registers-page d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-3 shadow-sm w-40" style={{ width: '20rem' }}>
        <h2 className="text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-4">
            <label htmlFor="username" className="fw-bold mb-2">Username:</label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>

          <div className="form-group mb-4">
            <label htmlFor="password" className="fw-bold mb-2">Password:</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>

          <div class='text-center'>
            <button type="submit" className="btn btn-primary w-20">
                Login
            </button>
          </div>
        </form>

        <div class='text-center'>
            <p className='mt-3'>
             Don't have an account?{' '}
             <Link to="/register">Create one here.</Link>
           </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;