import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './index.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import Home from "./home";
import Track from "./track"
import Register from "./register";
import Login from "./login";
import Profile from "./profile";
import Navigation from "./navigation";
import Search from "./search"
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import spotifyReducer from "./reducers/spotify-reducer";
import userReducer from "./reducers/user-reducer";
import authReducer from "./reducers/auth-reducer";
import EditProfile from './profile/edit-profile';
import "@fontsource/montserrat";
import postReducer from './reducers/post-reducer';
import FollowsPage from './profile/follows-page';

function App() {
  const store = configureStore({reducer: {spotifyData: spotifyReducer, 
                                          userData: userReducer,
                                          postData: postReducer, 
                                          authData: authReducer}})

  return (
       <div className="global-font">
      <BrowserRouter>
      <Provider store={store}>
          <Navigation/>
          <Routes>
            <Route index
                   element={<Home explore={false}/>}/>
            <Route path='/explore'
                   element={<Home explore={true}/>}/>
            <Route path='/tracks/:tid'
                   element={<Track explore={false}/>}/>
            <Route path='/tracks/:tid/explore'
                   element={<Track explore={true}/>}/>       
            <Route path='login'
                   element={<Login/>}/>
            <Route path='register'
                   element={<Register/>}/>
            <Route path='profile'
                   element={<Profile likedReviews={false}/>}/>
            <Route path='profile/liked-reviews'
                   element={<Profile likedReviews={true}/>}/>
            <Route path='edit-profile'
                   element={<EditProfile/>}/>
            <Route path='profile/following'
                   element={<FollowsPage followers={false}/>}/>
            <Route path='profile/followers'
                   element={<FollowsPage followers={true}/>}/>                   
            <Route path='profile/:username'
                   element={<Profile likedReviews={false}/>}/>
            <Route path='profile/:username/liked-reviews'
                   element={<Profile likedReviews={true}/>}/>'
            <Route path='search/:query'
                     element={<Search/>}/>
            <Route path='search'
                     element={<Search/>}/>              
            <Route path='profile/:username/following'
                   element={<FollowsPage followers={false}/>}/>
            <Route path='profile/:username/followers'
                   element={<FollowsPage followers={true}/>}/>       
          </Routes>
       </Provider>    
      </BrowserRouter>
      </div>
  );
}

export default App;
