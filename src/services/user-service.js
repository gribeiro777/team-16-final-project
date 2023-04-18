import axios from 'axios';

const DB_URL = 'https://webdevfinal-8nu2.onrender.com/api'
export const findUsers = async () => {
    const response = await axios.get(`${DB_URL}/get-all-users`);
    const users = response.data;

    return users
}

export const createUser = async (newUser) => {
    const response = await axios.post(`${DB_URL}/create-user`, newUser);
    const user = response.data;

    return user
}
