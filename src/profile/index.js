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

const store = configureStore({reducer: {authData: authReducer}})

function Profile({active}) {
    const { currentUser } = useSelector((state) => state.authData);
    const dispatch = useDispatch();
    
    useEffect(() => {
        const getCurrentUser = async () => {
            const { payload } = await dispatch(getCurrentUserThunk()).unwrap();
        }
        getCurrentUser();
    }, []);

    return(
        <Provider store={store}>
            <div className="container">
                <div className="row mt-3">
                    <div className='col-2 p-0'>
                        <ProfileInfo currentUser={currentUser}/>
                        <ProfileFollows/>
                    </div>

                    <div className='col-10'>
                        <ProfilePosts active={active}></ProfilePosts>
                    </div>
                </div>
            </div>
        </Provider>
    )
}
export default Profile;