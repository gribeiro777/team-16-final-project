import axios from 'axios';
const api = axios.create({
  withCredentials: true,
});


const DB_URL = 'https://webdevfinal-8nu2.onrender.com/api'

export const register = async (newUser) => {
    const response = await axios.post(`${DB_URL}/register`, newUser);
    const user = response.data;

    return user
}

export const login = async (credentials) => {
    const response = await api.post(`${DB_URL}/login`, credentials);
    const user = response.data;

    return user
}

export const getCurrentUser = async () => {
    const response = await api.get(`${DB_URL}/get-current-user`);
    const user = response.data;

    return user
}

export const logout = async () => {
    const response = await api.post(`${DB_URL}/logout`);
    const user = response.data;

    return user
}
