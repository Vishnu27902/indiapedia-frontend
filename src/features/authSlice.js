import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../api/axios"

const MESSAGE = {
    success: "Logged in Successfully",
    error: "Something went wrong, try again later"
}
const initialState = {
    loading: false,
    error: false,
    success: false,
    message: "",
    username: "",
    accessToken: "",
    role: ""
}

export const getAccessToken = createAsyncThunk("auth/signIn", async ({ username, password }) => {
    const authData = await axios.post("/auth/signIn", { username, password })
    return authData.data
})

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        reset: (state, action) => {
            const stateReset = {
                loading: false,
                error: false,
                success: false,
                message: "",
                username: "",
                accessToken: "",
                role: ""
            }
            state = stateReset
        }
    },
    extraReducers(builder) {
        builder
            .addCase(getAccessToken.pending, (state, action) => {
                state.loading = true
            })
            .addCase(getAccessToken.rejected, (state, action) => {
                state.loading = false
                state.error = true
                state.message = MESSAGE.error
            })
            .addCase(getAccessToken.fulfilled, (state, action) => {
                state.loading = false
                state.error = false
                state.success = true
                state.message = MESSAGE.success
                state.username = action.payload.username
                state.accessToken = action.payload.accessToken
                state.role = action.payload.role
            })
    }
})

export const { reset } = authSlice.actions

export default authSlice.reducer