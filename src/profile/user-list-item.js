import React from "react";
import { Link } from "react-router-dom";

export const UserListItem = ({user}) => {
    const profileLink = `/profile/${user?.username}`;
    return (
        <div className='col-xxl-2 col-md-3 col-sm-5 col-10 d-flex align-items-center px-3 py-2 m-3 border rounded-4'>
            <div className='row'>
                <div className='col-3'>
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" 
                        className='img-fluid rounded-circle' alt='Avatar'/>
                </div>
                <div className='d-none d-xxl-flex col-8 d-flex align-items-center'>
                    <Link to={profileLink} style={{ fontSize: '1vw' }}>{user?.username}</Link>
                </div>
                <div className='d-xxl-none d-lg-flex d-none col-8 d-flex align-items-center'>
                    <Link to={profileLink} style={{ fontSize: '2vw' }}>{user?.username}</Link>
                </div>
                <div className='d-lg-none d-sm-flex d-none col-8 d-flex align-items-center'>
                    <Link to={profileLink} style={{ fontSize: '2.75vw' }}>{user?.username}</Link>
                </div>
                <div className='d-sm-none col-8 d-flex align-items-center'>
                    <Link to={profileLink} style={{ fontSize: '5vw' }}>{user?.username}</Link>
                </div>
            </div>
        </div>
    );
}