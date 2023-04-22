import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.css';
import SearchBar from "./searchbar";
import PostsList from "./post-list";
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
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state) => state.authData);
    const [postListUser, setPostListUser] = useState(null)

    useEffect(() => {
        const getCurrentUser = async () => {
            const { payload } = await dispatch(getCurrentUserThunk()).unwrap();
        }
        getCurrentUser();
    }, []);

    useEffect(() => {
        setPostListUser(currentUser)
    }, [currentUser])


    const PostNav = ({exploreActive}) => {
        return (
            <div className="pt-xl-5">
                <ul class="nav nav-tabs nav-fill">
                    <li class={`nav-item ${!exploreActive ? 'bg-second' : ''} rounded-top`}>
                        <Link to={"/"} class={`nav-link ${exploreActive ? 'text-light' : 'text-dark'}`} href="#">People you follow</Link>
                    </li>
                    <li class={`nav-item ${exploreActive ? 'bg-second' : ''} rounded-top`}>
                        <Link to={"/explore"} class={`nav-link ${!exploreActive ? 'text-light' : 'text-dark'}`} href="#">Explore</Link>
                    </li>
                </ul>
            </div>
        );
    }

    return(
        <Provider store={store}>
        <div className="body">
            <div className="row">
                <div className="col-2 secondary-color ps-lg-5">
                </div>
                <div className="col-8 card main-card main-color">
                    <div className="row search-bar sticky-top">
                        <SearchBar></SearchBar>
                    </div>
                    <PostNav exploreActive={explore}/>
                    <div className='row pt-5'>
                        <PostsList user={explore ? null : postListUser}></PostsList>
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