import axios from 'axios';

const DB_URL = 'https://webdevfinal-8nu2.onrender.com/api'
const api = axios.create({
        withCredentials: true
    })
    
export const findPosts = async () => {

    const api = axios.create({
        withCredentials: true
    })

    const response = await axios.get(`${DB_URL}/get-all-posts`);
    const posts = response.data;

    return posts
}

export const createPost = async (post) => {
    const response = await api.post(`${DB_URL}/create-post`, post)
    return response.data
}
