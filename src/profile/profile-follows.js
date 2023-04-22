import React from "react";
import { UserListItem } from "./user-list-item";
import { Link } from "react-router-dom";

export default function ProfileFollows() {
    return (
        <div className='text-center'>
            <div className='border rounded-4 mb-3'>
                <Link to='/profile/followers'>Followers</Link>
                <div>
                    <ul className='list-group justify-content-center text-start'>
                    {[ {username: 'jackgitter'}, {username: 'mrussell246'}, {username: 'gribeiro'} ].map(user => (UserListItem({user})))}
                    </ul>
                </div>
            </div>
            <div className='border rounded-4 mb-3'>
                <Link to='/profile/following'>Following</Link>
                <div>
                    <ul className='list-group justify-content-center text-start'>
                    {[ {username: 'jackgitter'}, {username: 'mrussell246'}, {username: 'gribeiro'} ].map(user => (UserListItem({user})))}
                    </ul>
                </div>
            </div>

        </div>
    );
}