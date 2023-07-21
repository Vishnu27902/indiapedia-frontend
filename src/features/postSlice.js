import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const ERROR_MSG = "Error Occurred.. Try Again Later"
const initialState = {
    comment: "",
    error: false,
    success: false,
    message: ""
}

export const postComment = createAsyncThunk("comment/post", async (data) => {
    const { axios, type, id, message:comment } = data
    await axios.post(`/user/${type}/${id}/post`, { comment })
})

export const deleteComment = createAsyncThunk("comment/delete", async (data) => {
    const { axios, type, id, postID } = data
    console.log(postID)
    await axios.delete(`/user/${type}/${id}/post/${postID}`)
})

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        resetPost: (state, action) => {
            state.comment = ""
            state.error = false
            state.message = ""
            state.success = false
        },
        setComment: (state, action) => {
            state.message = action.payload
        }
    },
    extraReducers(builder) {
        builder
            .addCase(postComment.rejected, (state, action) => {
                state.success = false
                state.error = true
                state.message = ERROR_MSG
            })
            .addCase(deleteComment.rejected, (state, action) => {
                state.success = false
                state.error = true
                state.message = ERROR_MSG
            })
            .addCase(deleteComment.fulfilled, (state, action) => {
                state.error = false
                state.message = ""
                state.success = true
                state.message = "Post Deleted Successfully"
            })
    }
})

export const { resetPost,setComment } = postSlice.actions

export default postSlice.reducer