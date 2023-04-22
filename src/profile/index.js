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
import { getUserByUsernameThunk } from '../thunks/user-thunks';
import SmallProfile from './small-profile';

function Profile({likedReviews}) {
    const { currentUser } = useSelector((state) => state.authData);
    const dispatch = useDispatch();
    const { viewingUser } = useSelector((state) => state.userData);
    const { username } = useParams();

    useEffect(() => {
        dispatch(getCurrentUserThunk());
    }, []);

    useEffect(() => {
        dispatch(getUserByUsernameThunk(username))
    }, [dispatch, username])

    let user = undefined;
    if (username) {
        user = viewingUser;
    }

    return(
        <div className="container">
            <div className="row mt-3">
                <div className='d-none d-md-block col-md-2 p-0'>
                    <ProfileInfo viewingUser={user} currentUser={currentUser} smallView={false}/>
                </div>

                <div className='d-block d-md-none col-12'>
                    <ProfileInfo viewingUser={user} currentUser={currentUser} smallView={true}/>
                </div>

                <div className='col-12 col-md-10 ps-4'>
                    <ProfilePosts likedReviews={likedReviews} viewingUser={user}></ProfilePosts>
                </div>
            </div>
        </div>
    )
}
export default Profile;