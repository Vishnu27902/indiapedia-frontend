import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../api/axios"

const ERROR_MSG = "Error Occurred.. Try Again Later"
const initialState = {
    dataCount: 0,
    pageCount: 1,
    pageSelected: 0,
    allUsers: [],
    users: [],
    loading: false,
    error: false,
    message: "",
    limit: 8
}

export const getAllUsers = createAsyncThunk("admin/getAllUsers", async () => {
    const users = await axios.get("/admin/users")
    return users.data.usersData
})

export const getUsers = createAsyncThunk("admin/getUsers", async (data) => {
    const user = await axios.get(`/admin/users?page=${data.pageSelected + 1}&limit=${data.limit}`)
    return user.data.usersData
})

const adminUsersSlice = createSlice({
    name: "adminStates",
    initialState,
    reducers: {
        setPageSelected: (state, action) => {
            state.pageSelected = action.payload
        }
    },
    extraReducers(builder) {
        builder
            .addCase(getAllUsers.pending, (state, action) => {
                state.loading = true
            })
            .addCase(getAllUsers.rejected, (state, action) => {
                state.error = true
                state.message = ERROR_MSG
            })
            .addCase(getAllUsers.fulfilled, (state, action) => {
                state.error = false
                state.message = ""
                state.allUsers = action.payload
                state.dataCount = action.payload.length
                state.pageCount = Math.ceil(action.payload.length / state.limit)
            })
            .addCase(getUsers.pending, (state, action) => {
                state.loading = true
            })
            .addCase(getUsers.rejected, (state, action) => {
                state.error = true
                state.message = ERROR_MSG
            })
            .addCase(getUsers.fulfilled, (state, action) => {
                state.loading = false
                state.error = false
                state.message = ""
                state.users = action.payload
            })
    }
})

export const { setPageSelected } = adminUsersSlice.actions

export default adminUsersSlice.reducer