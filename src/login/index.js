import 'bootstrap/dist/css/bootstrap.css';
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import spotifyReducer from "../reducers/spotify-reducer";
import userReducer from '../reducers/user-reducer'
import LoginForm from './login-form';

const store = configureStore({reducer: {spotifyData: spotifyReducer, userData: userReducer}})

function Login() {
    return(
        <Provider store={store}>
          <LoginForm></LoginForm>
        </Provider>
    )
}
export default Login;