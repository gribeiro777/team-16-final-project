import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import PostItem
    from "./post-list-item";
import {findPostsThunk} from "../../thunks/post-thunks";

const PostsList = () => {
    const {posts} = useSelector(state => state.postData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findPostsThunk())
    }, [])
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