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
                console.log('pend')
                state.posts = []
            },
        [findPostsThunk.fulfilled]:
            (state, { payload }) => {
                console.log(payload)
                state.posts = payload
            },
        [findPostsThunk.rejected]:
            (state, action) => {
                console.log(action.error)
                state.error = action.error
            },
    },
    reducers: {}
});
export default postSlice.reducer;

