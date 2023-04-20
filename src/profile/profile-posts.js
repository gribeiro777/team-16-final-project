import React from "react";

export default function ProfilePosts() {
    return (
        <div className='text-center'>
            <div className='p-2 mb-5'>
                <h1>My Reviews</h1>
                <div>
                    <ul className='list-group'>
                        <li className='list-group-item'>Review 1</li>
                        <li className='list-group-item'>Review 2</li>
                        <li className='list-group-item'>Review 3</li>
                        <li className='list-group-item'>Review 4</li>
                        <li className='list-group-item'>Review 5</li>
                    </ul>
                </div>
            </div>
            <div className='p-2'>
                <h1>Liked Reviews</h1>
                <div>
                <ul className='list-group'>
                        <li className='list-group-item'>Review 1</li>
                        <li className='list-group-item'>Review 2</li>
                        <li className='list-group-item'>Review 3</li>
                        <li className='list-group-item'>Review 4</li>
                        <li className='list-group-item'>Review 5</li>
                    </ul>
                </div>
            </div>

        </div>
    );
}