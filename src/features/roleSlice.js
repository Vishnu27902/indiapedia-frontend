import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: false,
    app: false,
    admin: false
}

const roleSlice = createSlice({
    name: "role",
    initialState,
    reducers: {
        toggleRole: (state, action) => {
            const keys = Object.keys(state)
            const role = action.payload
            for (let key of keys) {
                state[key] = false
            }
            state[role] = true
        }
    }
})

export const { toggleRole } = roleSlice.actions

export default roleSlice.reducer