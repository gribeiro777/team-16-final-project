import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getTrackThunk} from "../thunks/spotify-thunks";

const TrackInfo = (props) => {
    const {currentTrack} = useSelector(state => state.spotifyData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTrackThunk(props.tid))
    }, [])

    return (
    <div className='mt-4'>
        {currentTrack ?
        <div className="row">
            <div className='col-3'>
                <img src={currentTrack.album.images[0].url}
                     className='img-fluid' alt='Album'></img>
            </div>
            <div className='col-9 color-first d-flex flex-column justify-content-end'>
                <h1 className='fw-bold' style={{ fontSize: '6vw' }}>{currentTrack.name}</h1>
                <h3 className='mb-4'>Album: {currentTrack.album.name}</h3>
                <span>
                {currentTrack.artists.map(artist => `${artist.name} ● `)}
                {currentTrack.album.release_date.slice(0, 4)} ● { }
                {`${Math.floor(currentTrack.duration_ms / 60000)}:${Math.trunc(currentTrack.duration_ms / 1000 % 60)}`}
                </span>
            </div>
        </div>
        : 'invalid song id'}
    </div>
    );
}

export default TrackInfo