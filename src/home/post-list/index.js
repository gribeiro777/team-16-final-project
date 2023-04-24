import React, {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import PostItem
    from "./post-list-item";
import {findPostsThunk, findUserPostsThunk, getPostByTrackIDThunk, getPostsFromFollowingTrackIdThunk, getUserLikedPostsThunk} from "../../thunks/post-thunks";
import { getCurrentUserThunk } from "../../thunks/auth-thunks";

const PostsList = ({userPosts, userFollowingPosts, userLikedPosts, trackId, myProfile = false}) => {
    const {posts} = useSelector(state => state.postData)
    const {currentUser} = useSelector(state => state.authData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCurrentUserThunk());
        if (trackId && userFollowingPosts) {
            dispatch(getPostsFromFollowingTrackIdThunk(trackId));
        } else if (trackId) {
            dispatch(getPostByTrackIDThunk(trackId))
        } else if (userLikedPosts) {
            dispatch(getUserLikedPostsThunk(userLikedPosts.username));
        } else if (userPosts) {
            dispatch(findUserPostsThunk(userPosts.username))
        } else {
            dispatch(findPostsThunk(userFollowingPosts ? userFollowingPosts.username : null))
        }
    }, [userFollowingPosts])

    const newestFirst = posts.slice().reverse()
    return <div className="text-off-black">
        <ul className="list-group rounded-0">
            {
                newestFirst.map(post => 
                    <PostItem key={post._id} post={post} myProfile={myProfile} currentUser={currentUser}/>)
            }
        </ul>
    </div>
}

export default PostsList