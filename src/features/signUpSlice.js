import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../api/axios";

const MESSAGE = {
    success: "User Registration Successful",
    error: "Something went wrong... Please Try Again"
}
const initialState = {
    username: "",
    email: "",
    phNumber: "",
    password: "",
    confirmPassword: "",
    validUsername: false,
    validEmail: false,
    validPhNumber: false,
    validPassword: false,
    validConfirmPassword: false,
    status: false,
    usernameFocus: false,
    emailFocus: false,
    phNumberFocus: false,
    passwordFocus: false,
    confirmPasswordFocus: false,
    validSignUp: false,
    loading: false,
    error: false,
    success: false,
    message: ""
}

const REGEX = {
    USERNAME: /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/,
    EMAIL: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
    PH_NO: /^[0-9]{10}$/,
    PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/
}

export const registerUser = createAsyncThunk("auth/signUp", async ({ name, email, phNumber, password }) => {
    await axios.post("/auth/signUp", {
        name,
        email,
        phNumber,
        password
    })
})

const signUp = createSlice({
    name: "signUp",
    initialState,
    reducers: {
        validateUsername: (state, action) => {
            state.username = action.payload
            state.validUsername = REGEX.USERNAME.test(state.username)
        },
        validateEmail: (state, action) => {
            state.email = action.payload
            state.validEmail = REGEX.EMAIL.test(state.email)
        },
        validatePhNumber: (state, action) => {
            state.phNumber = action.payload
            state.validPhNumber = REGEX.PH_NO.test(state.phNumber)
        },
        validatePassword: (state, action) => {
            state.password = action.payload
            state.validPassword = REGEX.PASSWORD.test(state.password)
        },
        validateConfirmPassword: (state, action) => {
            state.confirmPassword = action.payload
            state.validConfirmPassword = (state.password === state.confirmPassword) && state.validPassword
        },
        usernameFocused: (state, action) => {
            state.usernameFocus = action.payload
        },
        emailFocused: (state, action) => {
            state.emailFocus = action.payload
        },
        phNumberFocused: (state, action) => {
            state.phNumberFocus = action.payload
        },
        passwordFocused: (state, action) => {
            state.passwordFocus = action.payload
        },
        confirmPasswordFocused: (state, action) => {
            state.confirmPasswordFocus = action.payload
        },
        validateSignUp: (state) => {
            state.validSignUp = state.validConfirmPassword && state.validEmail && validatePassword && validatePhNumber && validateUsername
        },
        resetSignUp: (state) => {
            state.username = ""
            state.email = ""
            state.phNumber = ""
            state.password = ""
            state.confirmPassword = ""
            state.validUsername = false
            state.validEmail = false
            state.validPhNumber = false
            state.validPassword = false
            state.validConfirmPassword = false
            state.status = false
            state.usernameFocus = false
            state.emailFocus = false
            state.phNumberFocus = false
            state.passwordFocus = false
            state.confirmPasswordFocus = false
            state.validSignUp = false
            state.loading = false
            state.error = false
            state.success = false
            state.message = ""
        }
    },
    extraReducers(builders) {
        builders
            .addCase(registerUser.pending, (state, action) => {
                state.loading = true
                state.error = false
                state.success = false
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false
                state.success = false
                state.error = true
                state.message = MESSAGE.error
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false
                state.error = false
                state.success = true
                state.message = MESSAGE.success
            })
    }
})

export const { validateUsername, validateEmail, validatePhNumber, validatePassword, validateConfirmPassword, validateSignUp, usernameFocused, emailFocused, phNumberFocused, passwordFocused, confirmPasswordFocused, resetSignUp } = signUp.actions

export default signUp.reducer