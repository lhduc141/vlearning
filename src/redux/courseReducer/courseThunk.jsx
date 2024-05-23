import { createAsyncThunk } from "@reduxjs/toolkit";
import { courseService } from "../../service/courseService";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

export const getCourseThunk = createAsyncThunk(
  "course/movieThunk",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await courseService.getCourses();
      console.log("data:", data.data);
      message.success("getlist success");
      return data.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
export const getDetailCourse = createAsyncThunk(
  "course/detailCourse",
  async (payload) => {
    console.log("payload:", payload);
    try {
      const data = await courseService.getDetailCourse(payload);
      message.success("get detail success");
      return data;
    } catch (error) {
      console.log("error:", error);
      message.error("load fail");
    }
  }
);
export const buyCourse = createAsyncThunk(
  "course/buyCourse",
  async (payload) => {
    console.log("payload:", payload);
    try {
      const data = await courseService.buyCourse(payload);
      message.success("buy success");
      return data;
    } catch (error) {
      console.log("error:", error);
      message.error("Bạn đã mua khóa học này rồi");
      return "fail";
    }
  }
);
