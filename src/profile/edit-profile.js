import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import { getCurrentUserThunk, updateUserThunk } from "../thunks/auth-thunks";

const EditProfile = () => {
    const { loading, currentUser } = useSelector(state => state.authData)
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const getCurrentUser = async () => {
            const { payload } = await dispatch(getCurrentUserThunk()).unwrap();
        }
        getCurrentUser();
    }, []);

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

    const handleSubmit = async (event) => {
        if (password !== confirmPassword) {
            alert('Passwords do not match. Please try again.');
        } else {
            event.preventDefault();
            let updates = {}
            if (username) {
                updates.username = username
            }
            if (password) {
                updates.password = password
            }
            if (email) {
                updates.email = email
            }
            try {
                await dispatch(updateUserThunk({username: currentUser.username, updates})).unwrap()
                navigate('/profile');
            } catch (error) {
                alert('Username or email already exists. Please try again.');
            }
        }
    };

  return (
    <div className="registers-page d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-3 shadow-sm w-40" style={{ width: '30rem' }}>
        <h2 className="text-center mb-4">Edit Profile</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-4">
            <label htmlFor="username" className="fw-bold mb-2">Username:</label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={username}
              onChange={handleUsernameChange}
              placeholder={currentUser?.username}
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
              placeholder={currentUser?.email}
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

          <div className='text-center'>
            {!loading && <button type="submit" className="btn btn-primary w-20">
                Confirm
            </button>}
            {loading && <button type="submit" className="btn btn-primary w-20" disabled>
                Confirming...
            </button>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;


