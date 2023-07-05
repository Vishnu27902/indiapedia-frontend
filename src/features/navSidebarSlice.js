import { createSlice } from "@reduxjs/toolkit";

const initialState = { openNavSidebar: false }

export const navSidebarSlice = createSlice({
    name: "navSidebar",
    initialState,
    reducers: {
        toggleOpen: (state) => {
            state.openNavSidebar = true
        },
        toggleClose: (state) => {
            state.openNavSidebar = false
        }
    }
})

export const { toggleOpen, toggleClose } = navSidebarSlice.actions

export default navSidebarSlice.reducer