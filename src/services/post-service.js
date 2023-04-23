import axios from 'axios';

const DB_URL = 'https://webdevfinal-8nu2.onrender.com/api'
const api = axios.create({
        withCredentials: true
    })
    
export const findPosts = async (username) => {
    const response = username ? await axios.get(`${DB_URL}/get-posts-from-following/${username}`) : await axios.get(`${DB_URL}/get-all-posts`)
    const posts = response.data;

    return posts
}

export const findUserPosts = async (username) => {
    const response = await axios.get(`${DB_URL}/get-user-posts/${username}`)
    const posts = response.data;

    return posts
}

export const createPost = async (post) => {
    const response = await api.post(`${DB_URL}/create-post`, post)
    return response.data
}

export const deletePost = async (postID) => {
    const response = await api.delete(`${DB_URL}/delete-post/${postID}`)
    return response.data
}

export const getPostByTrackID = async (trackID) => {
    const response = await api.get(`${DB_URL}/get-post-by-track-id/${trackID}`)
    return response.data
}

export const getPostsFromFollowingTrackId = async (trackId) => {
    const response = await api.get(`${DB_URL}/get-posts-from-following-trackID/${trackId}`)
    return response.data
}
