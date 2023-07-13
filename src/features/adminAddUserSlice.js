import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "../api/axios"

const initialState = {
    success: false,
    error: false,
    message: ""
}

export const postUser = createAsyncThunk("users/addUser", async (userData) => {
    await axios.post("/admin/users", userData)
})

const adminAddUserSlice = createSlice({
    name: "adminAddUser",
    initialState,
    reducers: {
        revokeStatus: (state, action) => {
            state.success = false
            state.error = false
            state.message = ""
        }
    },
    extraReducers(builder) {
        builder
            .addCase(postUser.fulfilled, (state, action) => {
                state.message = "New User Added Successfully"
                state.success = true
            })
            .addCase(postUser.rejected, (state, action) => {
                state.message = "Error Occurred Submission failed"
                state.error = true
            })
    }
})

export const { revokeStatus } = adminAddUserSlice.actions

export default adminAddUserSlice.reducer