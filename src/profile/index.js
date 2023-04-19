import 'bootstrap/dist/css/bootstrap.css';
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import authReducer from '../reducers/auth-reducer';
import ProfileInfo from './profile-info';
import ProfilePosts from './profile-posts';
import ProfileFollows from './profile-follows';

const store = configureStore({reducer: {authData: authReducer}})

function Profile() {
    return(
        <Provider store={store}>
            <div className="container">
                <div className="row">
                    <div className='col-2'>
                        <ProfileInfo></ProfileInfo>
                    </div>

                    <div className='col-8'>
                        <ProfilePosts></ProfilePosts>
                    </div>

                    <div className='col-2'>
                        <ProfileFollows></ProfileFollows>
                    </div>
                </div>
            </div>
        </Provider>
    )
}
export default Profile;