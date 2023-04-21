import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service
    from "../services/post-service"

export const findPostsThunk = createAsyncThunk(
    'posts/findUsers', async () =>
        await service.findPosts()
)

export const createPostThunk = createAsyncThunk(
    'posts/createPost', async (post) =>
        await service.createPost(post)
)
