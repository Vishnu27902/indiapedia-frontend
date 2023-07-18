import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    doOpen: false
}

const mainFrameSidebarSlice = createSlice({
    name: "mainFrameSidebar",
    initialState,
    reducers: {
        toggleOpen: (state, action) => {
            state.doOpen = action.payload
        }
    }
})

export const { toggleOpen } = mainFrameSidebarSlice.actions

export default mainFrameSidebarSlice.reducer