import axios from "axios";
import SpotifyWebApi from 'spotify-web-api-js'

const getSpotifyWebApi = async () => {
    const clientId = 'b371664be8fd4d97997f18df54681110'
    const clientSecret = '947e8e79a29648ac8687e47e34803436'

    const response = await axios.post('https://accounts.spotify.com/api/token',
        {grant_type: 'client_credentials',
            client_id: clientId,
            client_secret: clientSecret},
        {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
    const spotifyApi = new SpotifyWebApi()
    spotifyApi.setAccessToken(response.data['access_token'])
    return spotifyApi
}
export const searchSpotify = async (query, count) => {
    const spotifyApi = await getSpotifyWebApi()
    const results = await spotifyApi.searchTracks(query, { limit: count });
    return results.tracks.items
}

export const getTrack = async (tid) => {
    const spotifyApi = await getSpotifyWebApi()
    const trackInfo = await spotifyApi.getTrack(tid)
    return trackInfo
}