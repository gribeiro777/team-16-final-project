import axios from 'axios';

const DB_URL = 'https://webdevfinal-8nu2.onrender.com/api'
export const findPosts = async () => {

    const api = axios.create({
        withCredentials: true
    })

    const response = await axios.get(`${DB_URL}/get-all-posts`);
    const posts = response.data;

    return posts
}
