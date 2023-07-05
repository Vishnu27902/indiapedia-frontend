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
            setTimeout(() => {
                state[action.payload.status] = false
                state.message = ""
            }, 3000)
        }
    }
})

export const { notify } = notification.actions

export default notification.reducer