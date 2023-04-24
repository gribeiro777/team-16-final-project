import { createSlice } from "@reduxjs/toolkit";
import {createPostThunk, deletePostThunk, findPostsThunk, findUserPostsThunk, getPostByTrackIDThunk, getPostsFromFollowingTrackIdThunk, getUserLikedPostsThunk}
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
                state.loading = true;
                state.posts = []
            },
        [findUserPostsThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false;
                state.posts = payload
            },
        [createPostThunk.fulfilled]:
            (state, { payload }) => {
                state.posts.push(payload)
            },
        [deletePostThunk.fulfilled]:
            (state, { payload }) => {
                state.posts = state.posts.filter(post => post._id !== payload._id)
            },
        [getPostByTrackIDThunk.fulfilled]:
            (state, { payload }) => {
                state.posts = payload
            },
        [getPostsFromFollowingTrackIdThunk.fulfilled]:
            (state, { payload }) => {
                state.posts = payload
            },
        [getUserLikedPostsThunk.fulfilled]:
            (state, { payload }) => {
                state.posts = payload
            },
    },
    reducers: {}
});
export default postSlice.reducer;

