import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
    return (
        <div class='d-flex justify-content-center align-items-end bg-secondary position-relative'>
            <Link className='text-decoration-none text-black' to='/'><h2>Explore</h2></Link>
            <Link className='text-decoration-none text-black' to='/'><h1 className='px-5'>Website</h1></Link>
            <Link className='text-decoration-none text-black' to='/'><h2>Personal</h2></Link>
            <div className='d-flex align-items-center position-absolute end-0 me-3 h-100 '>
                <img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' 
                        alt='logo' width='40px' className='img-fluid rounded-circle'></img>
            </div>
        </div>
    );
}

export default NavigationBar;