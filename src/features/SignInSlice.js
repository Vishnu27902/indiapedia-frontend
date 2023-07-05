import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: "",
    password: "",
    validUsername: false,
    validPassword: false,
    validSignIn: false,
    ACCESS_TOKEN: undefined
}

const EMPTY_REGEX = /(.|\s)*\S(.|\s)*/

const signIn = createSlice({
    name: "signIn",
    initialState,
    reducers: {
        validateSignInUsername: (state, action) => {
            state.username = action.payload
            state.validUsername = EMPTY_REGEX.test(state.username)
        },
        validateSignInPassword: (state, action) => {
            state.password = action.payload
            state.validPassword = EMPTY_REGEX.test(state.password)
        },
        validateSignIn: (state) => {
            state.validSignIn = state.validUsername && state.validPassword
        },
        resetSignIn: (state) => {
            state.username = ""
            state.password = ""
        },
        setAccessToken: (state, action) => {
            state.ACCESS_TOKEN = action.payload
        }
    }
})

export const { validateSignInUsername, validateSignInPassword, validateSignIn, resetSignIn, setAccessToken } = signIn.actions

export default signIn.reducer