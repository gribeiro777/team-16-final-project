import { createSlice } from "@reduxjs/toolkit";
import {createPostThunk, findPostsThunk, findUserPostsThunk, getPostByTrackIDThunk, getPostsFromFollowingTrackIdThunk}
    from "../thunks/post-thunks";


const initialState = {
    posts: [],
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
        [findUserPostsThunk.pending]:
            (state) => {
                state.posts = []
            },
        [findUserPostsThunk.fulfilled]:
            (state, { payload }) => {
                state.posts = payload
            },
        [createPostThunk.fulfilled]:
            (state, { payload }) => {
                state.posts.unshift(payload)
            },
        [getPostByTrackIDThunk.fulfilled]:
            (state, { payload }) => {
                state.posts = payload
            },
        [getPostsFromFollowingTrackIdThunk.fulfilled]:
            (state, { payload }) => {
                state.posts = payload
            },
    },
    reducers: {}
});
export default postSlice.reducer;

