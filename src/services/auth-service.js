import axios from 'axios';

const DB_URL = 'https://webdevfinal-8nu2.onrender.com/api'

export const register = async (newUser) => {
    const response = await axios.post(`${DB_URL}/register`, newUser);
    const user = response.data;

    return user
}

export const login = async (credentials) => {
    const response = await axios.post(`${DB_URL}/login`, credentials);
    const user = response.data;

    return user
}
