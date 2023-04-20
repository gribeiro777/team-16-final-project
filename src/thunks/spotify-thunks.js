import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service
    from "../services/spotify-service"

export const searchSpotifyThunk = createAsyncThunk(
        'spotify/search', async (searchInfo) =>
            searchInfo.query ? await service.searchSpotify(searchInfo.query, searchInfo.count) : []
)

export const getTrackThunk = createAsyncThunk(
    'spotify/track', async (tid) =>
        await service.getTrack(tid)
)
