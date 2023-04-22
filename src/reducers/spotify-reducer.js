import { createSlice } from "@reduxjs/toolkit";
import {searchSpotifyThunk, getTrackThunk}
    from "../thunks/spotify-thunks";


const initialState = {
    tracks: [],
    loading: false,
    currentTrack: null
}

const spotifySlice = createSlice({
    name: 'spotify',
    initialState,
    extraReducers: {
        [searchSpotifyThunk.pending]:
            (state) => {
                state.loading = true
                state.tracks = []
            },
        [searchSpotifyThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.tracks = payload
            },
        [searchSpotifyThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },
        [getTrackThunk.pending]:
            (state) => {
            },
        [getTrackThunk.fulfilled]:
            (state, { payload }) => {
                state.currentTrack = payload
            },
        [getTrackThunk.rejected]:
            (state, action) => {
                state.error = action.error
            },
    },
    reducers: {}
});
export default spotifySlice.reducer;

