import { createSlice } from "@reduxjs/toolkit";
<<<<<<< HEAD
import {findUsersThunk, createUserThunk, followUserThunk, getUserFollowingThunk, unfollowUserThunk}
=======
import {findUsersThunk, findUsersByUsernameThunk, followUserThunk, getUserFollowingThunk, unfollowUserThunk, getUserByUsernameThunk}
>>>>>>> 05cfe5a (user proper thunks)
    from "../thunks/user-thunks";

const initialState = {
    users: [],
    loading: false,
<<<<<<< HEAD
=======
    postUsers: {},
    loadingPostUsers: false,
    viewingUser: null,
    viewingUserFollowing: [],
    viewingUserFollowers: [],
>>>>>>> 05cfe5a (user proper thunks)
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
        [findUsersByUsernameThunk.pending]:
            (state) => {
                state.loadingPostUsers = true
                state.postUsers = {}
            },
        [findUsersByUsernameThunk.fulfilled]:
            (state, { payload }) => {
                state.loadingPostUsers = false
                state.postUsers = payload
            },
        [findUsersByUsernameThunk.rejected]:
            (state, action) => {
                state.loadingPostUsers = false
                state.error = action.error
            },
        [getUserByUsernameThunk.pending]:
            (state) => {
                state.loading = true
            },
        [getUserByUsernameThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.viewingUser = payload
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
                state.viewingUserFollowing = []
            },
        [getUserFollowingThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.viewingUserFollowing = payload
            },
    },
    reducers: {}
});
export default userSlice.reducer;
