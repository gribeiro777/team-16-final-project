import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service
    from "../services/auth-service"

export const registerThunk = createAsyncThunk(
    'users/register', async (newUser) =>
        await service.register(newUser)
)
