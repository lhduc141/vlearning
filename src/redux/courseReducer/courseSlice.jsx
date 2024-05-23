import { createSlice } from "@reduxjs/toolkit";
import {
  buyCourse,
  getCoursePage,
  getCourseThunk,
  getDetailCourse,
} from "./courseThunk";
import { courseLocal } from "../../service/courseLocal";
import { message } from "antd";

const initialState = {
  listCourse: courseLocal.getCourseList(),
  detailCourse: [],
  coursePageList: [],
};

const courseSlice = createSlice({
  name: "courseSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCourseThunk.fulfilled, (state, action) => {
        state.loading = false;
        courseLocal.setCourseList(action.payload);
        courseLocal.addCourse(action.payload);
        state.listCourse = action.payload;
        state.courses = action.payload;
      })
      .addCase(getDetailCourse.fulfilled, (state, data) => {
        state.loading = false;
        courseLocal.setCourseDetail();
        courseLocal.addDetailCourse(data.payload);
        state.detailCourse = data.payload;
      })
      .addCase(buyCourse.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(buyCourse.rejected, (state, action) => {
        state.loading = false;
        message.error("Bạn đã mua khóa học này rồi");
      })
      .addCase(getCoursePage.fulfilled, (state, action) => {
        state.loading = false;
        courseLocal.setCoursePageList(action.payload.data);
        courseLocal.addCourse(action.payload.data);
        state.coursePageList = action.payload.data;
      });
  },
});

export const {} = courseSlice.actions;

export default courseSlice.reducer;
