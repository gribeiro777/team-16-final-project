import axios from 'axios';
const api = axios.create({
    withCredentials: true,
  });

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

export const getUserByUsername = async (username) => {
    const response = await api.get(`${DB_URL}/get-user/${username}`);
    const user = response.data;

    return user
}

export const followUser = async (username) => {
    const response = await api.put(`${DB_URL}/follow-user/${username}`);
    const user = response.data;

    return user
}

export const unfollowUser = async (username) => {
    const response = await api.put(`${DB_URL}/unfollow-user/${username}`);
    const user = response.data;

    return user
}

export const getUserFollowing = async (username) => {
    console.log('username', username)
    const response = await api.get(`${DB_URL}/get-user-following/${username}`);
    const following = response.data;

    return following
}

export const getUserFollowers = async (username) => {
    const response = await api.get(`${DB_URL}/get-user-followers/${username}`);
    const followers = response.data;

    return followers
}