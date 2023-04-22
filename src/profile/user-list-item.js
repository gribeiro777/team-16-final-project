import React from "react";

export const UserListItem = ({user}) => {
    return (
        <li className='list-group-item px-3 py-1'>
            <div className='row'>
                <div className='col-3'>
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" 
                        className='img-fluid rounded-circle' alt='Avatar'/>
                </div>
                <div className='col-8'>
                    <span style={{ fontSize: '1vw' }}>{user?.username}</span>
                </div>
            </div>
        </li>
    );
}