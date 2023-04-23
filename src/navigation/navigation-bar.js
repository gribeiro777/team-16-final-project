import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutThunk } from "../thunks/auth-thunks";

const NavigationBar = () => {
    const { currentUser } = useSelector((state) => state.authData);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logout = async () => {
        try {
            await dispatch(logoutThunk()).unwrap();
            navigate('/')
        } catch (err) {
            alert(`An error has occured: ${err}`);
        }
    }

    return (
        <nav className="nav navbar accent-color secondary-color-border">
            <div className="container-fluid">
                <Link className="navbar-brand fw-bold" to="/">Tune Talk</Link>
                <div className='d-flex position-absolute end-50'>
                    <i class="bi bi-headphones fa-2x"></i>
                </div>
                {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}
                <div className='d-flex align-items-center position-absolute end-0 me-3 h-100 '>
                    {!currentUser &&
                    <button class="btn btn-outline-dark" type="button">
                        <Link className='text-decoration-none text-black' to='/login'>Login</Link>
                    </button>
                    }
                    {currentUser &&
                        <div class="dropdown">
                            <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <img alt='profile' src={`https://picsum.photos/seed/${currentUser?.username}/600`} width='40px' className='img-fluid rounded-circle'/>
                            </button>
                            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
                                <li><Link className='dropdown-item' to='/profile'>Profile</Link></li>
                                <li><a class="dropdown-item" href="/" onClick={logout}>Logout</a></li>
                            </ul>
                        </div>
                    }
                </div>
                {/* Make a dropdown menu on the right side */}
                {/* <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/explore">Explore</Link>
                        </li>
                    </ul>
                </div> */}
            </div>
        </nav>
    );
}

export default NavigationBar;