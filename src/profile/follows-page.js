import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { findUsersThunk, getUserByUsernameThunk, getUserFollowersThunk, getUserFollowingThunk } from "../thunks/user-thunks";
import { getCurrentUserThunk } from "../thunks/auth-thunks";
import { UserListItem } from "./user-list-item";

const FollowsPage = ({followers}) => {
    const { currentUser } = useSelector((state) => state.authData);
    const dispatch = useDispatch();
    const { viewingUserFollowing } = useSelector((state) => state.userData);
    const { viewingUserFollowers } = useSelector((state) => state.userData);
    const { username } = useParams();

    useEffect(() => {
        dispatch(getCurrentUserThunk());
    }, []);

    useEffect(() => {
        if (followers) {
            if (username) {
                dispatch(getUserFollowersThunk(username))
            } else {
                dispatch(getUserFollowersThunk(currentUser?.username))
            }
        } else {
            if (username) {
                dispatch(getUserFollowingThunk(username))
            } else {
                dispatch(getUserFollowingThunk(currentUser?.username))
            }
        }
    }, [currentUser?.username, dispatch, username])

    return (
        <div>
            <h1>Follows Page</h1>
            <div className='d-flex justify-content-center'>
                <div className='row justify-content-center'>
                    {followers && viewingUserFollowers.map((followerUser) => UserListItem({user: followerUser}))}
                    {!followers && viewingUserFollowing.map((followingUser) => UserListItem({user: followingUser}))}
                </div>
            </div>
        </div>
    );
}

export default FollowsPage;