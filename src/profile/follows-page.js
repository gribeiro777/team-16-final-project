/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getUserFollowersThunk, getUserFollowingThunk } from "../thunks/user-thunks";
import { getCurrentUserThunk } from "../thunks/auth-thunks";
import { UserListItem } from "./user-list-item";
import { Link } from "react-router-dom";

const FollowsPage = ({followers}) => {
    const { currentUser } = useSelector((state) => state.authData);
    const dispatch = useDispatch();
    const { viewingUserFollowing } = useSelector((state) => state.userData);
    const { viewingUserFollowers } = useSelector((state) => state.userData);
    const { username } = useParams();
    const currentUsername = username ? username : currentUser?.username;

    useEffect(() => {
        dispatch(getCurrentUserThunk());
    }, []);

    useEffect(() => {
        if (followers) {
            dispatch(getUserFollowersThunk(currentUsername))
        } else {
            dispatch(getUserFollowingThunk(currentUsername))
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentUser?.username, dispatch, username])

    let profileLink = '/profile'
    if (username) {
        profileLink = `/profile/${username}`
    }

    return (
        <div className='p-2 position-relative'>
            <Link to={profileLink}><i class="bi bi-arrow-left fa-2x ms-3 position-absolute text-accent" role='button'></i></Link>
            <div className='d-flex justify-content-center mt-4'>
                {followers && <h1 className='color-first'>{currentUsername}'s Followers</h1>}
                {!followers && <h1 className='color-first'>{currentUsername}'s Following</h1>}
            </div>
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