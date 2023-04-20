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
        <div class='d-flex justify-content-center align-items-end bg-secondary position-relative'>
            <Link className='text-decoration-none text-black' to='/'><h2>Explore</h2></Link>
            <Link className='text-decoration-none text-black' to='/'><h1 className='px-5'>Website</h1></Link>
            <Link className='text-decoration-none text-black' to='/'><h2>Personal</h2></Link>
            <div className='d-flex align-items-center position-absolute end-0 me-3 h-100 '>
            {!currentUser && <Link className='text-decoration-none text-black' to='/login'><h2>Login</h2></Link>}
            {currentUser && 
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img alt='profile' src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' width='40px' className='img-fluid rounded-circle'/>
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><Link className='dropdown-item' to='/profile'>Profile</Link></li>
                        <li><a class="dropdown-item" href="#" onClick={logout}>Logout</a></li>
                    </ul>
                </div>}
            </div>
        </div>
    );
}

export default NavigationBar;