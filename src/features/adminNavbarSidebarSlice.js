import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false
}

const adminNavbarSidebarSlice = createSlice({
    name: "adminNavbarSidebar",
    initialState,
    reducers: {
        toggleIsOpen: (state, action) => {
            state.isOpen = action.payload
        }
    }
})

export const { toggleIsOpen } = adminNavbarSidebarSlice.actions()

export default adminNavbarSidebarSlice.reducer