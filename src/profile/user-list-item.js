import React from "react";
import { Link } from "react-router-dom";
import './style/user-list-item.css';

export const UserListItem = ({user}) => {
    const profileLink = `/profile/${user?.username}`;
    return (
        <div className='col-xxl-2 col-md-3 col-sm-5 col-10 d-flex align-items-center px-3 py-2 m-3 rounded-4 bg-second shadow-hover' role='button'>
            <Link to={profileLink} className='text-decoration-none color-fourth'>
                <div className='row'>
                    <div className='col-3'>
                        <img src={`https://picsum.photos/seed/${user?.username}/600`}
                            className='img-fluid rounded-circle' alt='Avatar'/>
                    </div>
                    <div className='d-none d-xxl-flex col-8 d-flex align-items-center'>
                        <span className='text-decoration-none color-fourth' to={profileLink} style={{ fontSize: '1vw' }}>{user?.username}</span>
                    </div>
                    <div className='d-xxl-none d-lg-flex d-none col-8 d-flex align-items-center'>
                        <span className='text-decoration-none color-fourth' to={profileLink} style={{ fontSize: '2vw' }}>{user?.username}</span>
                    </div>
                    <div className='d-lg-none d-sm-flex d-none col-8 d-flex align-items-center'>
                        <span className='text-decoration-none color-fourth' to={profileLink} style={{ fontSize: '2.75vw' }}>{user?.username}</span>
                    </div>
                    <div className='d-sm-none col-8 d-flex align-items-center'>
                        <span className='text-decoration-none color-fourth' to={profileLink} style={{ fontSize: '5vw' }}>{user?.username}</span>
                    </div>
                </div>
            </Link>
        </div>
    );
}