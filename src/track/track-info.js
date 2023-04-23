import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getTrackThunk} from "../thunks/spotify-thunks";
import { ReviewForm } from "./review-form";
import { getPostByTrackIDThunk } from "../thunks/post-thunks";
import PostsList from "../home/post-list";
import { Link } from "react-router-dom";


const PostNav = ({exploreActive, tid}) => {
    return (
        <div className="pt-1 mb-2">
            <ul class="nav nav-tabs nav-fill accent-border">
                <li class={`nav-item ${!exploreActive ? 'secondary-color' : '' } rounded-top`}>
                    <Link to={`/tracks/${tid}`} class={`nav-link ${exploreActive ? 'text-dark' : 'text-light'}`} href="#">People you follow</Link>
                </li>
                <li class={`nav-item ${exploreActive ? 'secondary-color' : ''} rounded-top`}>
                    <Link to={`/tracks/${tid}/explore`} class={`nav-link ${!exploreActive ? 'text-dark' : 'text-light'}`} href="#">Explore</Link>
                </li>
            </ul>
        </div>
    );
}

const TrackInfo = ({tid, explore}) => {
    const { currentUser } = useSelector((state) => state.authData);
    const {currentTrack} = useSelector(state => state.spotifyData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTrackThunk(tid))
    }, [])

    return (
    <div className='mt-4'>
        {currentTrack ?
        <div>
            <div className="row mb-4">
                <div className='col-3'>
                    <img src={currentTrack.album.images[0].url}
                        className='img-fluid' alt='Album'></img>
                </div>
                <div className='col-9 color-first d-flex flex-column justify-content-end'>
                    <span className='fw-bold' style={{ fontSize: '4vw' }}>{currentTrack.name}</span>
                    <h3 className='mb-4'>Album: {currentTrack.album.name}</h3>
                    <span>
                    {currentTrack.artists.map(artist => `${artist.name} ● `)}
                    {currentTrack.album.release_date.slice(0, 4)} ● { }
                    {`${Math.floor(currentTrack.duration_ms / 60000)}:${Math.trunc(currentTrack.duration_ms / 1000 % 60)}`}
                    </span>
                </div>
            </div>
            
            <hr className='color-first'></hr>

            {currentUser && 
            <div className='row'>  
                <div>
                    <ReviewForm currentTrack={currentTrack}/>
                    <PostNav exploreActive={explore} tid={tid}/>
                    {!explore && <PostsList userFollowingPosts={currentUser} trackId={tid}/>}
                    {explore && <PostsList trackId={tid} myProfile={true}/>}
                </div>
            </div>}

            {!currentUser && 
                <div>   
                    <h2>Latest Reviews</h2>
                    <PostsList trackId={tid}/>
                </div>
            }
        </div>
        : 'invalid song id'}
    </div>
    );
}

export default TrackInfo