import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import authReducer from '../reducers/auth-reducer';
import RegisterForm from './register-form';

const store = configureStore({reducer: {authData: authReducer}})

function Register() {
    return(
        <Provider store={store}>
            <RegisterForm></RegisterForm>
        </Provider>
    )
}
export default Register;