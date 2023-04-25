import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import { loginThunk, registerThunk } from "../thunks/auth-thunks";

const RegisterForm = () => {
    const { currentUser } = useSelector(state => state.authData);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isAdmin, setIsAdmin] = useState(false);
    const [adminCode, setAdminCode] = useState("");
    const {loading} = useSelector(state => state.authData)

    const dispatch = useDispatch();
    const navigate = useNavigate();

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

    const handleAdminStatusChange = (event) => {
        setIsAdmin(!isAdmin);
    };

    const handleAdminCodeChange = (event) => {
        setAdminCode(event.target.value);
    };

    const handleSubmit = async (event) => {
        if (password !== confirmPassword) {
            alert('Passwords do not match. Please try again.');
        } else if (isAdmin && adminCode !== 'admin') {
            alert('Incorrect admin code. Please try again.');
        } else {
            event.preventDefault();
            const newUser = {
                username: username,
                password: password,
                email: email,
                isAdmin: isAdmin,
                followers: [],
                following: [],
                likedPosts: [],
                posts: [],
            }
            try {
                await dispatch(registerThunk(newUser)).unwrap()
                const credentials = {username: username, password: password}
                await dispatch(loginThunk(credentials)).unwrap();
                navigate('/profile');
            } catch (error) {
                alert('Username or email already exists. Please try again.');
            }
        }
    };

    if (currentUser) {
        navigate('/profile');
    }

  return (
    <div className="registers-page d-flex justify-content-center align-items-center vh-100">
      <div className="card accent-color p-3 shadow-sm w-40" style={{ width: '30rem' }}>
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

          <div className='d-flex align-items-center mb-4'>
            <div className='form-check form-switch me-3'>
              <input class='form-check-input' 
                     type='checkbox' 
                     role='switch' 
                     id='isAdmin'
                     checked={isAdmin}
                     onChange={handleAdminStatusChange}/>
              <label class='form-check-label' for='isAdmin'>Admin</label>
            </div>
            <div className='form-group flex-fill'>
              <input
                type="password"
                className="form-control"
                id="adminCode"
                placeholder="Admin Code"
                value={adminCode}
                onChange={handleAdminCodeChange}
              />
            </div>
          </div>

          <div className='text-center'>
            {!loading && <button type="submit" className="btn btn-primary w-20">
                Register
            </button>}
            {loading && <button type="submit" className="btn btn-primary w-20">
                Register    
            </button>}
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


