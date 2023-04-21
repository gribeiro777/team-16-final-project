import 'bootstrap/dist/css/bootstrap.css';
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUserThunk } from "../thunks/auth-thunks";
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import authReducer from '../reducers/auth-reducer';
import ProfileInfo from './profile-info';
import ProfilePosts from './profile-posts';
import ProfileFollows from './profile-follows';
import { useParams } from 'react-router';
import { findUsersThunk } from '../thunks/user-thunks';

function Profile({likedReviews}) {
    const { currentUser } = useSelector((state) => state.authData);
    const dispatch = useDispatch();
    const { users } = useSelector((state) => state.userData);
    const { uid } = useParams();

    useEffect(() => {
        dispatch(findUsersThunk())
    }, [])

    let user = undefined
    if (uid) {
        user = users.find(user => user._id === uid)
    }
    
    useEffect(() => {
        const getCurrentUser = async () => {
            const { payload } = await dispatch(getCurrentUserThunk()).unwrap();
        }
        getCurrentUser();
    }, []);

    return(
        <div className="container">
            <div className="row mt-3">
                <div className='col-2 p-0'>
                    <ProfileInfo user={user} currentUser={currentUser}/>
                    <ProfileFollows/>
                </div>

                <div className='col-10'>
                    <ProfilePosts likedReviews={likedReviews} user={user}></ProfilePosts>
                </div>
            </div>
        </div>
    )
}
export default Profile;