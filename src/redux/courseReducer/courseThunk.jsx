import { createAsyncThunk } from "@reduxjs/toolkit";
import { courseService } from "../../service/courseService";

export const getCourseThunk = createAsyncThunk(
  "movieReducer/movieThunk",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await courseService.getListCourse();
      return data.data.content;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
