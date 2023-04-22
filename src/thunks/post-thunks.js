import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service
    from "../services/post-service"

export const findPostsThunk = createAsyncThunk(
    'posts/findPosts', async (uid) =>
        await service.findPosts(uid)
)

export const createPostThunk = createAsyncThunk(
    'posts/createPost', async (post) =>
        await service.createPost(post)
)
