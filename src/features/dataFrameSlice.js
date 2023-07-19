import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const ERROR_MSG = "Error Occurred.. Try Again Later"
const initialState = {
    loading: false,
    error: false,
    message: "",
    data: []
}

export const getData = createAsyncThunk("data/getData", async (data) => {
    const { axios, role, type, id } = data
    const result = await axios.get(`/${role}/${type}/${id}`)
    if(type==="states")
    return result.data.stateData
    else
    return result.data.cityData
})

const dataFrameSlice = createSlice({
    name: "dataFrame",
    initialState,
    reducers: {
        reset: (state, action) => {
            state.loading = false
            state.error = false
            state.message = ""
            state.data = []
        }
    },
    extraReducers(builder) {
        builder
            .addCase(getData.pending, (state, action) => {
                state.loading = true
                state.error = false
                state.message = ""
            })
            .addCase(getData.rejected, (state, action) => {
                state.loading = false
                state.error = true
                state.message = ERROR_MSG
            })
            .addCase(getData.fulfilled, (state, action) => {
                state.loading = false
                state.error = false
                state.message = ""
                state.data = action.payload
            })
    }
})

export const { reset } = dataFrameSlice.actions

export default dataFrameSlice.reducer