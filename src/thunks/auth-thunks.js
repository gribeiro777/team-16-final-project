import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service
    from "../services/auth-service"

export const registerThunk = createAsyncThunk(
    'users/register', async (newUser) =>
        await service.register(newUser)
)

export const loginThunk = createAsyncThunk(
    'users/login', async (credentials) =>
        await service.login(credentials)
)

export const getCurrentUserThunk = createAsyncThunk(
    'users/currentUser', async () =>
        await service.getCurrentUser()
)

export const logoutThunk = createAsyncThunk(
    'users/logout', async () =>
        await service.logout()
)
