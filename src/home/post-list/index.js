import React, {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import PostItem
    from "./post-list-item";
import {findPostsThunk, getPostByTrackIDThunk} from "../../thunks/post-thunks";

const PostsList = ({user, trackId}) => {
    const {posts} = useSelector(state => state.postData)
    const dispatch = useDispatch();
    useEffect(() => {
        if (trackId) {
            dispatch(getPostByTrackIDThunk(trackId))
        } else {
            dispatch(findPostsThunk(user ? user.username : null))
        }
    }, [user])

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