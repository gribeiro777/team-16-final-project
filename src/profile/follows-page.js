import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { findUsersThunk, getUserByUsernameThunk, getUserFollowingThunk } from "../thunks/user-thunks";
import { getCurrentUserThunk } from "../thunks/auth-thunks";
import { UserListItem } from "./user-list-item";

const FollowsPage = () => {
    const { currentUser } = useSelector((state) => state.authData);
    const dispatch = useDispatch();
    const { viewingUserFollowing } = useSelector((state) => state.userData);
    const { viewingUser } = useSelector((state) => state.userData);
    const { username } = useParams();

    useEffect(() => {
        dispatch(getCurrentUserThunk());
    }, []);

    useEffect(() => {
        if (username) {
            dispatch(getUserFollowingThunk(username))
        } else {
            dispatch(getUserFollowingThunk(currentUser?.username))
        }
    }, [currentUser?.username, dispatch, username])

    return (
        <div>
            <h1>Follows Page</h1>
            <div className='d-flex justify-content-center'>
                <div className='row justify-content-center'>
                    {viewingUserFollowing.map((followingUser) => UserListItem({user: followingUser}))}
                </div>
            </div>
        </div>
    );
}

export default FollowsPage;