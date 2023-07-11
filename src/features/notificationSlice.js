import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    success: false,
    error: false,
    message: ""
}

const notification = createSlice({
    name: "notification",
    initialState,
    reducers: {
        notify: (state, action) => {
            state[action.payload.status] = true
            state.message = action.payload.message
        },
        revokeNotify: (state, action) => {
            state.success = false
            state.error = false
            state.message = ""
        }
    }
})

export const { notify, revokeNotify } = notification.actions

export default notification.reducer