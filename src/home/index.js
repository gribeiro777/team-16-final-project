import 'bootstrap/dist/css/bootstrap.css';
import SearchBar from "./searchbar";
import './style/index.css'
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import spotifyReducer from "../reducers/spotify-reducer";
import userReducer from '../reducers/user-reducer'

const store = configureStore({reducer: {spotifyData: spotifyReducer, userData: userReducer}})

function Home() {
    return(
        <Provider store={store}>
        <div className="container">
            <div className="row">
                <SearchBar></SearchBar>
            </div>
        </div>
        </Provider>
    )
}
export default Home