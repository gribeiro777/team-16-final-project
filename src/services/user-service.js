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

export const followUser = async (uid) => {
    const response = await api.put(`${DB_URL}/follow-user/${uid}`);
    const user = response.data;

    return user
}

export const unfollowUser = async (uid) => {
    const response = await api.put(`${DB_URL}/unfollow-user/${uid}`);
    const user = response.data;

    return user
}

export const getUserFollowing = async (uid) => {
    const response = await api.get(`${DB_URL}/get-user-following/${uid}`);
    const following = response.data;

    return following
}