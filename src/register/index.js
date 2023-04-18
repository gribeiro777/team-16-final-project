import 'bootstrap/dist/css/bootstrap.css';
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import spotifyReducer from "../reducers/spotify-reducer";
import userReducer from '../reducers/user-reducer'
import RegisterForm from './register-form';

const store = configureStore({reducer: {spotifyData: spotifyReducer, userData: userReducer}})

function Register() {
    return(
        <Provider store={store}>
            <RegisterForm></RegisterForm>
        </Provider>
    )
}
export default Register;