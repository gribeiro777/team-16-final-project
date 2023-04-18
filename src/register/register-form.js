import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

const RegisterForm = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // handle form submission
    };

  return (
    <div className="registers-page d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-3 shadow-sm w-40" style={{ width: '30rem' }}>
        <h2 className="text-center mb-4">Register</h2>
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
            <label htmlFor="email" className="fw-bold mb-2">Email address:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={handleEmailChange}
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

          <div className="form-group mb-4">
            <label htmlFor="confirmPassword" className="fw-bold mb-2">Confirm Password:</label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
          </div>

          <div class='text-center'>
            <button type="submit" className="btn btn-primary w-20">
                Register
            </button>
          </div>
        </form>

        <div class='text-center'>
            <p className="mt-3">
            Already have an account? <Link to="/login">Log in</Link>
            </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;


