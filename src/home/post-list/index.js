import React, {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import PostItem
    from "./post-list-item";
import {findPostsThunk, findUserPostsThunk, getPostByTrackIDThunk, getPostsFromFollowingTrackIdThunk} from "../../thunks/post-thunks";

const PostsList = ({userPosts, userFollowingPosts, trackId}) => {
    const {posts} = useSelector(state => state.postData)
    const dispatch = useDispatch();
    useEffect(() => {
        if (trackId && userFollowingPosts) {
            dispatch(getPostsFromFollowingTrackIdThunk(trackId));
        } else if (trackId) {
            dispatch(getPostByTrackIDThunk(trackId))
        } else if (userPosts) {
            dispatch(findUserPostsThunk(userPosts.username))
        } else {
            dispatch(findPostsThunk(userFollowingPosts ? userFollowingPosts.username : null))
        }
    }, [userFollowingPosts])

    return <div className="text-off-black">
        <ul className="list-group rounded-0">
            {
                posts.map(post => 
                    <PostItem key={post._id} post={post}/>)
            }
        </ul>
    </div>
}

export default PostsList