import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../api/axios";

const initialState = {
    name: "",
    code: "",
    img: "",
    mainContent: "",
    success: false,
    error: false,
    message: ""
}

export const postState = createAsyncThunk("states/addState", async (stateData) => {
    await axios.post("/admin/state", stateData)
})

const adminAddStateSlice = createSlice({
    name: "adminAddState",
    initialState,
    reducers: {
        addState: (state, action) => {
            state = action.payload
        },
        revokeStatus: (state, action) => {
            state.success = false
            state.error = false
            state.message = ""
        }
    },
    extraReducers(builder) {
        builder
            .addCase(postState.fulfilled, (state, action) => {
                state.message = "New State Added Successfully"
                state.success = true
            })
            .addCase(postState.rejected, (state, action) => {
                state.message = "Error Occurred Submission failed"
                state.error = true
            })
    }
})

export const { addState, revokeStatus } = adminAddStateSlice.actions

export default adminAddStateSlice.reducer