import React, {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import PostItem
    from "./post-list-item";
import {findPostsThunk} from "../../thunks/post-thunks";
import {findUsersByUsernameThunk} from "../../thunks/user-thunks";

const PostsList = ({user}) => {
    const {posts, loadingPostUsers} = useSelector(state => state.postData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findPostsThunk(user ? user.username : null))
    }, [user])

    useEffect(() => {
        if (posts.length && !loadingPostUsers) {
            dispatch(findUsersByUsernameThunk(posts.map(post => post.username)))
        }
    }, [posts])

    return <div className="text-white">
        <ul className="list-group rounded-0">
            {
                posts.map(post => 
                    <PostItem
                        key={post._id} post={post}/>)
            }
        </ul>
    </div>
}

export default PostsList