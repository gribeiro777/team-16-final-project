import React, { useState } from "react";
import {Link} from "react-router-dom";
import '../style/index.css'
import { useDispatch } from "react-redux";
import { deletePostThunk, likePostThunk, unlikePostThunk } from "../../thunks/post-thunks";

const PostItem = (
    {
        post = {
            _id: 'abc',
            songTitle: 'Hello',
            review: 'Adele woohoo',
            username: 'jerry jones',
            rating: 5,
            artists: ['Adele'],
            genre: 'singing',
            albumArt: 'abc.com',
            spotifyURI: 'spotify.com/tracks/123',
            spotifyID: 'efg',
            likes: 10,
        },
        myProfile = false,
        currentUser,
    }
) => {
    const [isLiked, setIsLiked] = useState(currentUser?.likedPosts?.includes(post._id));
    const [numLikes, setNumLikes] = useState(post.likes);

    const starIcons = []
    for (let i = 0; i < post.rating; i++) {
        starIcons.push(<bi className="bi bi-star-fill"></bi>)
    }
    
    for (let i = post.rating; i < 5; i++) {
        starIcons.push(<bi className="bi bi-star"></bi>)
    }

    const dispatch = useDispatch()
    const deletePost = () => {
        dispatch(deletePostThunk(post._id))
    }

    const likePost = () => {
        dispatch(likePostThunk(post._id))
        setIsLiked(true);
        setNumLikes(numLikes + 1);
    }

    const unlikePost = () => {
        dispatch(unlikePostThunk(post._id))
        setIsLiked(false)
        setNumLikes(numLikes - 1);
    }

    return(
        <li className="list-group-item main-color text-off-black border-start-0 border-end-0 accent-border border-3 pt-3 pb-2 position-relative">
            <div className="row">
                <div className="col-3">
                    <Link className="text-decoration-none" to={`/tracks/${post.spotifyID}`}>
                        <div className="row">
                            <div className="col-auto d-flex flex-wrap align-items-center">
                                    <img className="rounded-4 " height={64} src={post.albumArt}/>
                            </div>
                            <div className="col">
                                <div className="row text-off-black">{post.songTitle}</div>
                                <div className="row time">{post.artists.map(artist => artist.name).join(', ')}</div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-9">
                    <div className='position-absolute end-0 me-3'>
                        {starIcons.map((icon) => icon)}
                    </div>
                    <div><b>
                        <Link to={`/profile/${post.username}`} style={{textDecoration: 'none'}}>
                            <span className="username text-off-black">{post.username}</span>
                        </Link></b> <span>&#183;</span> <span className="time">{post.time}</span>
                    </div>
                    <div className='text-break'>{post.review}</div>
                </div>
            </div>
            <div className='row mt-1 position-relative'>
                <div className='col-3'></div>
                <div className='col-9'>
                    {!isLiked && <i className="bi bi-heart me-1" role='button' onClick={likePost}></i>}
                    {isLiked && <i className="bi bi-heart-fill me-1" role='button' onClick={unlikePost}></i>}
                    <span className='time'>{` ${numLikes}`}</span>

                    {(myProfile || currentUser?.isAdmin) && <u className='position-absolute end-0 bottom-0 me-2 p-1 text-danger' role='button' onClick={deletePost}>Delete</u>}
                </div>
            </div>
            <div className="row"></div>
        </li>
    );
};
export default PostItem;