import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import Home from "./home";
import Track from "./track"
import Register from "./register";
import Login from "./login";
import Profile from "./profile";
import Navigation from "./navigation";
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import spotifyReducer from "./reducers/spotify-reducer";
import userReducer from "./reducers/user-reducer";
import authReducer from "./reducers/auth-reducer";
import EditProfile from './profile/edit-profile';

function App() {
  const store = configureStore({reducer: {spotifyData: spotifyReducer, userData: userReducer, authData: authReducer}})

  return (
       <div>
      <BrowserRouter>
      <Provider store={store}>
          <Navigation/>
          <Routes>
            <Route index
                   element={<Home/>}/>
            <Route path='/tracks/:tid'
                   element={<Track/>}/>
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
          </Routes>
       </Provider>    
      </BrowserRouter>
      </div>
  );
}

export default App;
