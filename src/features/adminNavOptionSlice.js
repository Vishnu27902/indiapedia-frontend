import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    home: true,
    states: false,
    cities: false,
    users: false,
    dashboard: false
}

const adminNavOptionSlice = createSlice({
    name: "adminNavOption",
    initialState,
    reducers: {
        toggle: (state, action) => {
            const optionSelected = action.payload.type
            const active = action.payload.active
            let options = Object.keys(state)
            options = options.filter((option) => option !== optionSelected)
            switch (optionSelected) {
                case "home":
                    state[optionSelected] = active
                    for (let option of options) {
                        state[option] = false
                    }
                    break
                case "states":
                    state[optionSelected] = active
                    for (let option of options) {
                        state[option] = false
                    }
                    break
                case "cities":
                    state[optionSelected] = active
                    for (let option of options) {
                        state[option] = false
                    }
                    break
                case "users":
                    state[optionSelected] = action
                    for (let option of options) {
                        state[option] = false
                    }
                    break
                case "dashboard":
                    state[optionSelected] = active
                    for (let option of options) {
                        state[option] = false
                    }
                    break
                default:
                    throw new Error("No Such Action Exists")
            }
        }
    }
})

export const { toggle } = adminNavOptionSlice.actions()

export default adminNavOptionSlice.reducer