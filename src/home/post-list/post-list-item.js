import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

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
        }
    }
) => {
    const {postUsers} = useSelector(state => state.userData)

    // const {user} = useSelector(state => state.spotifyData)
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     if (post.spotifyID) {
    //         dispatch(getTrackThunk(post.spotifyID))
    //         console.log('getting track')
    //     }
    // }, [])

    return(
        <li className="list-group-item main-color text-white border-white">
            <div className="row">
                <div className="col-3">
                    <div className="row">
                        <div className="col-5 d-flex flex-wrap align-items-center">
                            <Link to={`/tracks/${post.spotifyID}`}>
                                <img className="rounded-4 " height={64} src={post.albumArt}/>
                            </Link>
                        </div>
                        <div className="col-7">
                            <div className="row">{post.songTitle}</div>
                            <div className="row time">{post.artists.map(artist => artist.name).join(', ')}</div>
                        </div>
                    </div>
                </div>
                <div className="col-9">
                    <div><b>{postUsers.length ?
                        <Link to={`/users/${postUsers.find(entry => entry.username === post.username)._id}`} style={{textDecoration: 'none'}}>
                            <span className="username">{post.username}</span>
                        </Link> :
                        post.username}</b> <span>&#183;</span> <span className="time">{post.time}</span>
                        <i className="bi bi-x-lg float-end"></i>
                    </div>
                    <div>{post.review}</div>
                </div>
                <div className="col-2">

                </div>
            </div>
            <div className="row"></div>
        </li>
    );
};
export default PostItem;