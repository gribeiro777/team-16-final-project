import React from "react";
import { UserListItem } from "./user-list-item";

export default function ProfileFollows() {
    return (
        <div className='text-center'>
            <div className='border rounded-4 mb-3'>
                <h3>Followers</h3>
                <div>
                    <ul className='list-group justify-content-center text-start'>
                    {[ {username: 'jackgitter'}, {username: 'mrussell246'}, {username: 'gribeiro'} ].map(user => (UserListItem({user})))}
                    </ul>
                </div>
            </div>
            <div className='border rounded-4 mb-3'>
                <h3>Following</h3>
                <div>
                    <ul className='list-group justify-content-center text-start'>
                    {[ {username: 'jackgitter'}, {username: 'mrussell246'}, {username: 'gribeiro'} ].map(user => (UserListItem({user})))}
                    </ul>
                </div>
            </div>

        </div>
    );
}