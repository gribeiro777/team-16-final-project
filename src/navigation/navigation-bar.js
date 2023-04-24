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
                <div className='d-flex align-items-center position-absolute end-0 me-3 h-100 '>
                    <Link to={"/search/"}><i class="bi bi-search fa-2x pe-4 text-off-black"></i></Link>
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
            </div>
        </nav>
    );
}

export default NavigationBar;