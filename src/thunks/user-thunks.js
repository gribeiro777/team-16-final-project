import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service
    from "../services/user-service"

export const findUsersThunk = createAsyncThunk(
    'users/findUsers', async () =>
        await service.findUsers()
)

export const findUsersByUsernameThunk = createAsyncThunk(
    'users/findUserByUsername', async (usernames) =>
        await service.findUsersByUsername(usernames)
)