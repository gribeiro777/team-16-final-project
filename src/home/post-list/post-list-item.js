import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getTrackThunk} from "../../thunks/spotify-thunks";
import {Link} from "react-router-dom";

const PostItem = (
    {
        post = {
            id: 'abc',
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

    // const {user} = useSelector(state => state.spotifyData)
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     if (post.spotifyID) {
    //         dispatch(getTrackThunk(post.spotifyID))
    //         console.log('getting track')
    //     }
    // }, [])

    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col justify-content-center">
                    <img className="rounded-circle" height={64} src={post.albumArt}/>
                </div>
                <div className="col-10">
                    <div><b>{post.username}</b> <span>&#183;</span> {post.time}
                        <i className="bi bi-x-lg float-end"></i>
                    </div>
                    <div>{post.review}</div>
                </div>
                <div className="col-2">

                </div>
            </div>
        </li>
    );
};
export default PostItem;