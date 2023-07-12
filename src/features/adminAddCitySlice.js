import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../api/axios";

const initialState = {
    success: false,
    error: false,
    message: ""
}

export const postCity = createAsyncThunk("cities/addCity", async (cityData) => {
    await axios.post("/admin/city", cityData)
})

const adminAddCitySlice = createSlice({
    name: "adminAddCity",
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
            .addCase(postCity.fulfilled, (state, action) => {
                state.message = "New City Added Successfully"
                state.success = true
            })
            .addCase(postCity.rejected, (state, action) => {
                state.message = "Error Occurred Submission failed"
                state.error = true
            })
    }
})

export const { addState, revokeStatus } = adminAddCitySlice.actions

export default adminAddCitySlice.reducer