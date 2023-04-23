import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service
    from "../services/user-service"

export const findUsersThunk = createAsyncThunk(
    'users/findUsers', async () =>
        await service.findUsers()
)

export const followUserThunk = createAsyncThunk(
    'users/followUser', async (uid) =>
        await service.followUser(uid)
)

export const unfollowUserThunk = createAsyncThunk(
    'users/unfollowUser', async (uid) =>
        await service.unfollowUser(uid)
)

export const getUserFollowingThunk = createAsyncThunk(
    'users/getUserFollowing', async (uid) =>
        await service.getUserFollowing(uid)
)