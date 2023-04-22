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

export const getUserByUsernameThunk = createAsyncThunk(
    'users/getUserByUsername', async (username) =>
        await service.getUserByUsername(username)
)

export const followUserThunk = createAsyncThunk(
    'users/followUser', async (username) =>
        await service.followUser(username)
)

export const unfollowUserThunk = createAsyncThunk(
    'users/unfollowUser', async (username) =>
        await service.unfollowUser(username)
)

export const getUserFollowingThunk = createAsyncThunk(
    'users/getUserFollowing', async (username) =>
        await service.getUserFollowing(username)
)