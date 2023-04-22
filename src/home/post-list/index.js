import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import PostItem
    from "./post-list-item";
import {findPostsThunk} from "../../thunks/post-thunks";
import {findUsersByUsernameThunk} from "../../thunks/user-thunks";

const PostsList = () => {
    const {posts, loading, loadingPostUsers} = useSelector(state => state.postData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findPostsThunk())
    }, [])

    useEffect(() => {
        if (posts.length && !loadingPostUsers) {
            dispatch(findUsersByUsernameThunk(posts.map(post => post.username)))
            console.log('dispatching')
            console.log(posts.map(post => post.username))
        }
    }, [posts])


    return <div>
        <ul className="list-group">
            {
                posts.map(post =>
                    <PostItem
                        key={post._id} post={post}/>)
            }
        </ul>
    </div>
}

export default PostsList