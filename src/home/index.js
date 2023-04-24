import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.css';
import SearchBar from "./searchbar";
import PostsList from "./post-list";
import '../index.css'
import './style/index.css'
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import spotifyReducer from "../reducers/spotify-reducer";
import userReducer from '../reducers/user-reducer'
import postReducer from "../reducers/post-reducer";
import { getCurrentUserThunk } from "../thunks/auth-thunks";
import authReducer from '../reducers/auth-reducer';
import { Link } from "react-router-dom";

const store = configureStore({reducer: {spotifyData: spotifyReducer,
        userData: userReducer, postData: postReducer, authData: authReducer}})

function Home({explore}) {
    const { currentUser } = useSelector((state) => state.authData);
    const [postListUser, setPostListUser] = useState(null)

    useEffect(() => {
        setPostListUser(currentUser)
    }, [currentUser])


    const PostNav = ({exploreActive}) => {
        return (
            <div className="pt-5">
                <ul class="nav nav-tabs nav-fill accent-border">
                    <li class={`nav-item ${!exploreActive ? 'secondary-color' : '' } rounded-top`}>
                        <Link to={"/"} class={`nav-link ${exploreActive ? 'text-dark' : 'text-light'}`} href="#">People you follow</Link>
                    </li>
                    <li class={`nav-item ${exploreActive ? 'secondary-color' : ''} rounded-top`}>
                        <Link to={"/explore"} class={`nav-link ${!exploreActive ? 'text-dark' : 'text-light'}`} href="#">Explore</Link>
                    </li>
                </ul>
            </div>
        );
    }

    return(
        <Provider store={store}>
        <div className="secondary-color">
            <div className="row" style={{"min-height": "90vh"}}>
                <div className="col-2 secondary-color ps-5">
                </div>
                <div className="col-8 card main-card main-color mt-5">
                    <div className="row search-bar pt-2 main-color border-0 sticky-top">
                        <SearchBar></SearchBar>
                    </div>
                    {currentUser ? <PostNav exploreActive={explore}/> : ''}
                    <div className='row pt-3'>
                        <h2 className="pb-2 pt-5">Latest reviews</h2>
                        <PostsList userFollowingPosts={explore || !currentUser ? null : postListUser}></PostsList>
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