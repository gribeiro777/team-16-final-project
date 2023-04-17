import { createSlice } from "@reduxjs/toolkit";
import {findUsersThunk}
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
    },
    reducers: {}
});
export default userSlice.reducer;

