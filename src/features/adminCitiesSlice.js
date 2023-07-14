import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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

export const getAllCities = createAsyncThunk("admin/getAllCities", async (data) => {
    const cities = await data.axios.get("/admin/cities")
    return cities.data.citiesData
})

export const getCities = createAsyncThunk("admin/getCities", async (data) => {
    const cities = await data.axios.get(`/admin/cities?page=${data.pageSelected + 1}&limit=${data.limit}`)
    return cities.data.citiesData
})

const adminCitiesSlice = createSlice({
    name: "adminCities",
    initialState,
    reducers: {
        setPageSelected: (state, action) => {
            state.pageSelected = action.payload
        }
    },
    extraReducers(builder) {
        builder
            .addCase(getAllCities.pending, (state, action) => {
                state.error = false
                state.loading = true
            })
            .addCase(getAllCities.rejected, (state, action) => {
                state.error = true
                state.message = ERROR_MSG
            })
            .addCase(getAllCities.fulfilled, (state, action) => {
                state.error = false
                state.message = ""
                state.allCities = action.payload
                state.dataCount = action.payload.length
                state.pageCount = Math.ceil(action.payload.length / state.limit)
            })
            .addCase(getCities.pending, (state, action) => {
                state.error = false
                state.loading = true
            })
            .addCase(getCities.rejected, (state, action) => {
                state.error = true
                state.message = ERROR_MSG
            })
            .addCase(getCities.fulfilled, (state, action) => {
                state.loading = false
                state.error = false
                state.message = ""
                state.cities = action.payload
            })
    }
})

export const { setPageSelected } = adminCitiesSlice.actions

export default adminCitiesSlice.reducer