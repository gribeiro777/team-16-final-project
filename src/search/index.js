import SearchComponent from "./search-component.js"
import { useParams } from 'react-router';
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import spotifyReducer from "../reducers/spotify-reducer";
import userReducer from '../reducers/user-reducer'

const store = configureStore({reducer: {spotifyData: spotifyReducer,
    userData: userReducer}})

const Search = () => {
    const query = useParams();
    
    return <Provider store={store}>
            <div>
                <SearchComponent query={query}/>
            </div>  
            </Provider>
}

export default Search