import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getTrackThunk} from "../thunks/spotify-thunks";
import { ReviewForm } from "./review-form";

const TrackInfo = (props) => {
    const {currentTrack} = useSelector(state => state.spotifyData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTrackThunk(props.tid))
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

            <div className='row'>
                <div className='col-3'>
                    <h4 className='color-first'>Followers Ratings</h4> 
                    
                </div>
                <div className='col-9'>
                    <ReviewForm currentTrack={currentTrack}/>
                
                <ul className='list-group px-5 mx-4'>
                    <li className='list-group-item'></li>
                    <li className='list-group-item'></li>
                </ul>
                </div>
            </div>
        </div>
        : 'invalid song id'}
    </div>
    );
}

export default TrackInfo