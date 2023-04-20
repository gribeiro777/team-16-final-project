import { createSlice } from "@reduxjs/toolkit";
import { registerThunk, loginThunk, getCurrentUserThunk, logoutThunk, updateUserThunk } from "../thunks/auth-thunks";

const authSlice = createSlice({
    name: 'auth',
    initialState: { currentUser: null },
    extraReducers: {
        [registerThunk.pending]:
            (state) => {
                state.registered = false
                state.loading = true
                state.error = undefined
            },
        [registerThunk.fulfilled]:
            (state, { payload }) => {
                state.registered = true
                state.loading = false
            },
        [registerThunk.rejected]:
            (state, action) => {
                state.registered = false
                state.loading = false
                state.error = action.error
            },
        [loginThunk.pending]:
            (state) => {
                state.loggedIn = false
                state.loading = true
                state.error = undefined
            },
        [loginThunk.fulfilled]:
            (state, { payload }) => {
                state.loggedIn = true
                state.loading = false
            },
        [loginThunk.rejected]:
            (state, action) => {
                state.loggedIn = false
                state.loading = false
                state.error = action.error
            },
        [getCurrentUserThunk.fulfilled]:
            (state, { payload }) => {
                state.currentUser = payload
            },
        [logoutThunk.fulfilled]:
            (state, { payload }) => {
                state.currentUser = null
            },
        [updateUserThunk.pending]:
            (state) => {
                state.loading = true
            },
        [updateUserThunk.fulfilled]:
            (state, { payload }) => {
                state.currentUser = payload
            }
    },
    reducers: {}
});
export default authSlice.reducer;

