import 'bootstrap/dist/css/bootstrap.css';
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import LoginForm from './login-form';
import authReducer from '../reducers/auth-reducer';

const store = configureStore({reducer: {authData: authReducer}})

function Login() {
    return(
        <Provider store={store}>
          <LoginForm></LoginForm>
        </Provider>
    )
}
export default Login;