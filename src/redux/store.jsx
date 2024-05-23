import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userReducer/userSlice";
import courseSlice from "./courseReducer/courseSlice";

export const store = configureStore({
  reducer: {
    userReducer: userSlice,
    courseReducer: courseSlice,
  },
});
