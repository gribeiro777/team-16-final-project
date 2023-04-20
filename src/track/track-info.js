import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getTrackThunk} from "../thunks/spotify-thunks";

const TrackInfo = (props) => {
    const {currentTrack} = useSelector(state => state.spotifyData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTrackThunk(props.tid))
    }, [])

    return <div>{currentTrack ?
        <div>
            <p>{currentTrack.name}</p>
            <p>{currentTrack.artists.map(artist => artist.name)}</p>
            <p>{`${Math.floor(currentTrack.duration_ms / 60000)}:${Math.trunc(currentTrack.duration_ms / 1000 % 60)}`}</p>
            <p>{currentTrack.album.name}</p>
            <img width={'36px'} height={'36px'} src={currentTrack.album.images[0].url}></img>
        </div>
        : 'invalid song id'}</div>
}

export default TrackInfo