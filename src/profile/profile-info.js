import React from "react";
import { Link } from "react-router-dom";

const ProfileInfo = ({currentUser}) => {
    return (
        <div className='text-center px-2 py-4 bg-secondary rounded-4 mb-3'>
            <div className='px-2 mb-2'>
            <img alt='profile' src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                    className='rounded-circle img-fluid'></img>
            </div>     
            <h2 className='text-white text-break'>{currentUser?.username}</h2>
            <p className='text-white my-2'>{currentUser?.email}</p>
            <Link to='/edit-profile'>Edit Profile</Link>
        </div>
    );
}

export default ProfileInfo;