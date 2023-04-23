import { createSlice } from "@reduxjs/toolkit";
import {findUsersThunk, createUserThunk, followUserThunk, getUserFollowingThunk, unfollowUserThunk}
    from "../thunks/user-thunks";

const initialState = {
    users: [],
    loading: false,
}

const userSlice = createSlice({
    name: 'users',
    initialState,
    extraReducers: {
        [findUsersThunk.pending]:
            (state) => {
                state.loading = true
                state.users = []
            },
        [findUsersThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.users = payload
            },
        [findUsersThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },
        [followUserThunk.pending]:
            (state) => {
                state.loading = true
            },
        [followUserThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
            },
        [unfollowUserThunk.pending]:
            (state) => {
                state.loading = true
            },
        [unfollowUserThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
            },
        [getUserFollowingThunk.pending]:
            (state) => {
                state.loading = true
            },
        [getUserFollowingThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
            },
    },
    reducers: {}
});
export default userSlice.reducer;
