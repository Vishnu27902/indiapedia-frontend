import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../api/axios";

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

export const signOut = createAsyncThunk("auth/signOut", async () => {
    console.log("hello")
    await axios.get("/auth/logout")
})

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        reset: (state, action) => {
            state.loading = false
            state.error = false
            state.success = false
            state.message = ""
            state.username = ""
            state.accessToken = ""
            state.role = ""
        },
        setAccessToken: (state, action) => {
            state.accessToken = action.payload
        }
    },
    extraReducers(builder) {
        builder
            .addCase(getAccessToken.pending, (state, action) => {
                state.error = false
                state.success = false
                state.loading = true
            })
            .addCase(getAccessToken.rejected, (state, action) => {
                state.success = false
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
                state.accessToken = action.payload.ACCESS_TOKEN
                state.role = action.payload.role
            })
            .addCase(signOut.rejected, (state, action) => {
                state.success = false
                state.error = true
                state.message = MESSAGE.error
            })
            .addCase(signOut.fulfilled, (state, action) => {
                state.success = true
                state.error = false
                state.message = MESSAGE.success
            })
    }
})

export const { reset, setAccessToken } = authSlice.actions

export default authSlice.reducer