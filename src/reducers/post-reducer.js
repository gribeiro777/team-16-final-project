import { createSlice } from "@reduxjs/toolkit";
import {createPostThunk, findPostsThunk, getPostByTrackIDThunk}
    from "../thunks/post-thunks";


const initialState = {
    posts: [],
    currentTrackPosts: [],
}

const postSlice = createSlice({
    name: 'users',
    initialState,
    extraReducers: {
        [findPostsThunk.pending]:
            (state) => {
                state.posts = []
            },
        [findPostsThunk.fulfilled]:
            (state, { payload }) => {
                state.posts = payload
            },
        [findPostsThunk.rejected]:
            (state, action) => {
                state.error = action.error
            },
        [createPostThunk.fulfilled]:
            (state, { payload }) => {
                state.posts.unshift(payload)
            },
        [getPostByTrackIDThunk.fulfilled]:
            (state, { payload }) => {
                state.posts = payload
            },
    },
    reducers: {}
});
export default postSlice.reducer;

