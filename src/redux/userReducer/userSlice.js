import { createSlice } from "@reduxjs/toolkit";
import { userLocal } from "../../service/userLocal";
import { loginThunk } from "./userThunk";

const initialState = {
  infoUser: userLocal.get(),
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    logOutAction: (state, action) => {
      state.infoUser = null;
      localStorage.removeItem("token");
      userLocal.delete();
      window.location.href = "/";
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.infoUser = action.payload;
      })
      .addCase(loginThunk.pending, (state, action) => {
        state.infoUser = action.payload;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.infoUser = action.payload;
      });
  },
});

export const { setInfoUser } = userSlice.actions;

export default userSlice.reducer;
