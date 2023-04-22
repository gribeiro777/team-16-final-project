import axios from 'axios';

const DB_URL = 'https://webdevfinal-8nu2.onrender.com/api'
export const findUsers = async () => {
    const response = await axios.get(`${DB_URL}/get-all-users`);
    const users = response.data;

    return users
}

export const findUsersByUsername = async (usernames) => {
    const users = await Promise.all(usernames.map(async username => {
        const response = await axios.get(`${DB_URL}/get-user/${username}`)
        return response.data
    }))
    const userIdToUser = {}
    return users.map(user => userIdToUser[user.username] = user)
}