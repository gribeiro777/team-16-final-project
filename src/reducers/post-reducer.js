import { createSlice } from "@reduxjs/toolkit";
import {findPostsThunk}
    from "../thunks/post-thunks";


const initialState = {
    posts: []
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
    },
    reducers: {}
});
export default postSlice.reducer;

