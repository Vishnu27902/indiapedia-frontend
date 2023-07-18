import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    role: "app"
}

const roleSlice = createSlice({
    name: "role",
    initialState,
    reducers: {
        toggleRole: (state, action) => {
            state.role = action.payload
        }
    }
})

export const { toggleRole } = roleSlice.actions

export default roleSlice.reducer