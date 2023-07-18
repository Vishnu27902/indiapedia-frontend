import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const ERROR_MSG = "Error Occurred.. Try Again Later"
const initialState = {
    dataCount: 0,
    pageCount: 1,
    pageSelected: 0,
    allCities: [],
    cities: [],
    loading: false,
    error: false,
    message: "",
    limit: 8
}

export const getAllCities = createAsyncThunk(`info/getAllCities`, async (data) => {
    const result = await data.axios.get(`app/cities`)
    return result.cities
})

export const getCities = createAsyncThunk("info/getCities", async (data) => {
    const page = data.page
    const limit = data.limit
    const result = await data.axios.get(`app/cities?page=${page}&limit=${limit}`)
    return result.cities
})

const citiesSlice = createSlice({
    name: `cities`,
    initialState,
    reducers: {
        setPageSelected: (state, action) => {
            state.pageSelected = action.payload
        }
    },
    extraReducers(builder) {
        builder
            .addCase(getAllCities.pending, (state, action) => {
                state.loading = true
                state.error = false
                state.message = ""
            })
            .addCase(getAllCities.rejected, (state, action) => {
                state.loading = false
                state.error = true
                state.message = ERROR_MSG
            })
            .addCase(getAllCities.fulfilled, (state, action) => {
                state.loading = false
                state.error = false
                state.message = ""
                state.allStates = action.payload
            })
            .addCase(getCities.pending, (state, action) => {
                state.loading = true
                state.error = false
                state.message = ""
            })
            .addCase(getCities.rejected, (state, action) => {
                state.loading = false
                state.error = true
                state.message = ERROR_MSG
            })
            .addCase(getCities.fulfilled, (state, action) => {
                state.loading = false
                state.error = false
                state.message = ""
                state.states = action.payload
            })
    }
})

export const { setPageSelected } = citiesSlice.actions

export default citiesSlice.reducer