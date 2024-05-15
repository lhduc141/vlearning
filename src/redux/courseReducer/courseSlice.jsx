import { createSlice } from "@reduxjs/toolkit";
import { getCourseThunk } from "./courseThunk";

const initialState = {};

const courseSlice = createSlice({
  name: "courseSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCourseThunk.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getCourseThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.courses = action.payload;
      })
      .addCase(getCourseThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addDefaultCase((state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {} = courseSlice.actions;

export default courseSlice.reducer;
