import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
    name: "post",
    initialState: null,
    reducers: {
        getPostData: () => { }
    }
});

export const { getPostData } = postSlice.actions;

export default postSlice.reducer;