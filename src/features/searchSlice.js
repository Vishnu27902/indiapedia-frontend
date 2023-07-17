import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    error: false,
    loading: false,
    message: "",
    data: "",
    states: [],
    cities: []
}

export const getSearchResult = createAsyncThunk("search/getData", async (data) => {
    const result = await data.axios.get(`/app/search?data=${data}`)
    return result.data
})

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setData: (state, action) => {
            state.data = action.payload
        },
        reset: (state, action) => {
            state.error = false
            state.loading = false
            state.message = ""
            state.data = ""
            state.states = []
            state.cities = []
        }
    },
    extraReducers(builder) {
        builder
            .addCase(getSearchResult.pending, (state, action) => {
                state.error = false
                state.message = ""
                state.loading = true
            })
            .addCase(getSearchResult.rejected, (state, action) => {
                state.loading = false
                state.error = true
                state.message = "Error Occurred Please Try Again Later..."
            })
            .addCase(getSearchResult.fulfilled, (state, action) => {
                state.error = false
                state.loading = false
                state.message = ""
                state.cities = action.payload.citiesData
                state.states = action.payload.statesData
            })
    }
})

export const { setData, reset } = searchSlice.actions

export default searchSlice.reducer