import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    home: false,
    states: false,
    cities: false,
    dashboard: false
}

const optionSelectedSlice = createSlice({
    name: "optionSelected",
    initialState,
    reducers: {
        toggle: (state, action) => {
            switch (action.payload.option) {
                case "home":
                    state.home = action.payload.active
                    break
                case "states":
                    state.states = action.payload.active
                    break
                case "cities":
                    state.cities = action.payload.active
                    break
                case "dashboard":
                    state.dashboard = action.payload.active
                    break
                default:
                    throw new Error("Invalid Action")
            }
        }
    }
})

export const { toggle } = optionSelectedSlice.actions

export default optionSelectedSlice.reducer