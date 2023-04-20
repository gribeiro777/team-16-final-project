import axios from 'axios';

const DB_URL = 'https://webdevfinal-8nu2.onrender.com/api'
export const findUsers = async () => {
    const response = await axios.get(`${DB_URL}/get-all-users`);
    const users = response.data;

    return users
}
