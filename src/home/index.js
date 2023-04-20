import 'bootstrap/dist/css/bootstrap.css';
import SearchBar from "./searchbar";
import PostsList from "./post-list";
import './style/index.css'
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import spotifyReducer from "../reducers/spotify-reducer";
import userReducer from '../reducers/user-reducer'
import postReducer from "../reducers/post-reducer";

const store = configureStore({reducer: {spotifyData: spotifyReducer,
        userData: userReducer, postData: postReducer}})

function Home() {
    return(
        <Provider store={store}>
        <div className="body">
            <div className="row">
                <div className="col-2 secondary-color">
                    <div className="col-8 card main-card main-color">
                        <div className="row">
                        </div>
                    </div>
                </div>
                <div className="col-8 card main-card main-color">
                    <div className="row search-bar">
                        <SearchBar></SearchBar>
                    </div>
                    <div className='row'>
                        <PostsList></PostsList>
                    </div>
                </div>
                <div className="col-2 secondary-color">

                </div>
            </div>
        </div>
        </Provider>
    )
}
export default Home