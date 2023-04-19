import { createSlice } from "@reduxjs/toolkit";
import { registerThunk } from "../thunks/auth-thunks";

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
    },
    reducers: {}
});
export default authSlice.reducer;

