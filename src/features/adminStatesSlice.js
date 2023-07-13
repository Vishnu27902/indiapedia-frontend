import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../api/axios"

const ERROR_MSG = "Error Occurred.. Try Again Later"
const initialState = {
    dataCount: 0,
    pageCount: 1,
    pageSelected: 0,
    allStates: [],
    states: [],
    loading: false,
    error: false,
    message: "",
    limit: 8
}

export const getAllStates = createAsyncThunk("admin/getAllStates", async () => {
    const states = await axios.get("/app/states")
    return states.data.statesData
})

export const getStates = createAsyncThunk("admin/getStates", async (data) => {
    const states = await axios.get(`/app/states?page=${data.pageSelected + 1}&limit=${data.limit}`)
    return states.data.statesData
})

const adminStatesSlice = createSlice({
    name: "adminStates",
    initialState,
    reducers: {
        setPageSelected: (state, action) => {
            state.pageSelected = action.payload
        }
    },
    extraReducers(builder) {
        builder
            .addCase(getAllStates.pending, (state, action) => {
                state.loading = true
            })
            .addCase(getAllStates.rejected, (state, action) => {
                state.error = true
                state.message = ERROR_MSG
            })
            .addCase(getAllStates.fulfilled, (state, action) => {
                state.error = false
                state.message = ""
                state.allStates = action.payload
                state.dataCount = action.payload.length
                state.pageCount = Math.ceil(action.payload.length / state.limit)
            })
            .addCase(getStates.pending, (state, action) => {
                state.loading = true
            })
            .addCase(getStates.rejected, (state, action) => {
                state.error = true
                state.message = ERROR_MSG
            })
            .addCase(getStates.fulfilled, (state, action) => {
                state.loading = false
                state.error = false
                state.message = ""
                state.states = action.payload
            })
    }
})

export const { setPageSelected } = adminStatesSlice.actions

export default adminStatesSlice.reducer