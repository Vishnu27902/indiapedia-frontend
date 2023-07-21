import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const ERROR_MSG = "Error Occurred.. Try Again Later"
const initialState = {
    doUpdate: false,
    img: "",
    email: "",
    name: "",
    phNumber: "",
    error: false,
    message: "",
    success: false
}

export const getProfile = createAsyncThunk("profile/get", async (data) => {
    const { axios, role } = data
    const userData = await axios.get(`/${role}`)
    return userData.data.userData
})

export const updateProfile = createAsyncThunk("profile/update", async (data) => {
    const { axios, role, name, phNumber, img } = data
    await axios.patch(`/${role}`, { name, phNumber, img })
    return { name, phNumber, img }
})

export const deleteProfile = createAsyncThunk("profile/delete", async (data) => {
    const { axios, role } = data
    await axios.delete(`/${role}`)
})

const dashboardSlice = createSlice({
    name: "dashboard",
    initialState,
    reducers: {
        toggleUpdate: (state, action) => {
            state.doUpdate = action.payload
        }
    },
    extraReducers(builder) {
        builder
            .addCase(getProfile.pending, (state, action) => {
                state.error = false
                state.success = false
                state.message = ""
                state.loading = true
            })
            .addCase(getProfile.rejected, (state, action) => {
                state.loading = false
                state.success = false
                state.error = true
                state.message = ERROR_MSG
            })
            .addCase(getProfile.fulfilled, (state, action) => {
                state.loading = false
                state.error = false
                state.message = ""
                console.log(action.payload)
                const { name, _id, phNumber, img } = action.payload
                state.name = name
                state.img = img.data
                state.email = _id
                state.phNumber = phNumber
            })
            .addCase(updateProfile.rejected, (state, action) => {
                state.loading = false
                state.error = true
                state.message = ERROR_MSG
            })
            .addCase(updateProfile.fulfilled, (state, action) => {
                state.loading = false
                state.error = false
                state.success = true
                state.name = action.payload.name
                state.img = action.payload.img
                state.phNumber = action.payload.phNumber
                state.message = "Profile Updated Successfully"
            })
            .addCase(deleteProfile.rejected, (state, action) => {
                state.loading = false
                state.error = true
                state.message = ERROR_MSG
            })
            .addCase(deleteProfile.fulfilled, (state, action) => {
                state.loading = false
                state.error = false
                state.success = true
                state.message = "Account Deleted Successfully"
            })
    }
})

export const { setName, setImg, setPhNumber, toggleUpdate } = dashboardSlice.actions

export default dashboardSlice.reducer