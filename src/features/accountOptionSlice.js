import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    login: false,
    register: false
}

const accountOption = createSlice({
    name: "accountOption",
    initialState,
    reducers: {
        login: (state) => {
            state.login = !state.login
        },
        register: (state) => {
            state.register = !state.register
        }
    }
})

export const { login, register } = accountOption.actions

export default accountOption.reducer