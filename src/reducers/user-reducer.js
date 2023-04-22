import { createSlice } from "@reduxjs/toolkit";
import {findUsersThunk, findUsersByUsernameThunk, createUserThunk}
    from "../thunks/user-thunks";


const initialState = {
    users: [],
    loading: false,
    postUsers: {},
    loadingPostUsers: false
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
    },
    reducers: {}
});
export default userSlice.reducer;

