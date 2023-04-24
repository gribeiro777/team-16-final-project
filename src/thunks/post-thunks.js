import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service
    from "../services/post-service"

export const findPostsThunk = createAsyncThunk(
    'posts/findPosts', async (uid) =>
        await service.findPosts(uid)
)

export const findUserPostsThunk = createAsyncThunk(
    'posts/getUserPosts', async (uid) =>
        await service.findUserPosts(uid)
)

export const createPostThunk = createAsyncThunk(
    'posts/createPost', async (post) =>
        await service.createPost(post)
)

export const deletePostThunk = createAsyncThunk(
    'posts/deletePost', async (postID) =>
        await service.deletePost(postID)
)

export const getPostByTrackIDThunk = createAsyncThunk(
    'posts/getPostByTrackID', async (trackID) =>
        await service.getPostByTrackID(trackID)
)

export const getPostsFromFollowingTrackIdThunk = createAsyncThunk(
    'posts/getPostsFromFollowingTrackId', async (trackId) =>
        await service.getPostsFromFollowingTrackId(trackId)
)

export const getUserLikedPostsThunk = createAsyncThunk(
    'posts/getUserLikedPosts', async (username) =>
        await service.getUserLikedPosts(username)
)

export const likePostThunk = createAsyncThunk(
    'auth/likePost', async (postID) =>
        await service.likePost(postID)
)

export const unlikePostThunk = createAsyncThunk(
    'auth/unlikePost', async (postID) =>
        await service.unlikePost(postID)
)