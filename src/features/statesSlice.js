import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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

export const getAllStates = createAsyncThunk(`info/getAllStates`, async (data) => {
    const { role, axios } = data
    const result = await axios.get(`${role}/states`)
    return result.data.statesData
})

export const getStates = createAsyncThunk("info/getStates", async (data) => {
    const { pageSelected, limit, axios, role } = data
    const result = await axios.get(`${role}/states?page=${pageSelected + 1}&limit=${limit}`)
    return result.data.statesData
})

const citiesSlice = createSlice({
    name: `states`,
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
                state.error = false
                state.message = ""
            })
            .addCase(getAllStates.rejected, (state, action) => {
                state.loading = false
                state.error = true
                state.message = ERROR_MSG
            })
            .addCase(getAllStates.fulfilled, (state, action) => {
                state.loading = false
                state.error = false
                state.message = ""
                state.allStates = action.payload
            })
            .addCase(getStates.pending, (state, action) => {
                state.loading = true
                state.error = false
                state.message = ""
            })
            .addCase(getStates.rejected, (state, action) => {
                state.loading = false
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

export const { setPageSelected } = citiesSlice.actions

export default citiesSlice.reducer