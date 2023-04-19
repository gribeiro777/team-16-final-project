import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import { registerThunk } from "../thunks/auth-thunks";

const RegisterForm = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const {loading, error, registered} = useSelector(state => state.authData)

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (error) {
            alert('Username or email already exists. Please try again.');
        }
        if (registered) {
            navigate('/');
        }
    }, [error, registered, navigate])

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
        if (password !== confirmPassword) {
            alert('Passwords do not match. Please try again.');
        } else {
            event.preventDefault();
            const newUser = {
                username: username,
                password: password,
                email: email,
                isAdmin: false,
                followers: [],
                following: [],
                likedPosts: [],
                posts: [],
            }
            console.log(newUser);
            dispatch(registerThunk(newUser))
        }
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
              required
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
              required
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
              required
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
              required
            />
          </div>

          <div className='text-center'>
            {!loading && <button type="submit" className="btn btn-primary w-20">
                Register
            </button>}
            {loading && <p>Registering...</p>}
          </div>
        </form>

        <div className='text-center'>
            <p className="mt-3">
            Already have an account? <Link to="/login">Log in</Link>
            </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;


