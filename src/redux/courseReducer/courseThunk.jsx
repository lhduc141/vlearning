import { createAsyncThunk } from "@reduxjs/toolkit";
import { courseService } from "../../service/courseService";
import { message } from "antd";

export const getCourseThunk = createAsyncThunk(
  "course/movieThunk",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await courseService.getCourses();
      return data.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
export const getDetailCourse = createAsyncThunk(
  "course/detailCourse",
  async (payload) => {
    try {
      const data = await courseService.getDetailCourse(payload);
      return data;
    } catch (error) {
      console.log("error:", error);
    }
  }
);
export const buyCourse = createAsyncThunk(
  "course/buyCourse",
  async (payload) => {
    try {
      const data = await courseService.buyCourse(payload);
      message.success("buy success");
      return data;
    } catch (error) {
      message.error("Bạn đã mua khóa học này rồi");
      return "fail";
    }
  }
);
export const getCoursePage = createAsyncThunk(
  "course/get-course-page",
  async (payload) => {
    try {
      const coursePage = courseService.getCoursePage(payload);
      return coursePage;
    } catch (error) {}
  }
);
