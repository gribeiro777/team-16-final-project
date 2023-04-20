import { useParams } from 'react-router';
import {Provider, useDispatch, useSelector} from "react-redux";
import {getTrackThunk} from "../thunks/spotify-thunks";
import TrackInfo from "./track-info";
import {configureStore} from "@reduxjs/toolkit";
import spotifyReducer from "../reducers/spotify-reducer";
const store = configureStore({reducer: {spotifyData: spotifyReducer}})
function Track() {
    const { tid } = useParams();

    return(
        <Provider store={store}>
            <div className="container">
                <div className="row">
                    <TrackInfo tid={tid}></TrackInfo>
                </div>
            </div>
        </Provider>
    )}

export default Track