import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  infoUser: null,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setInfoUser: (state, action) => {
      state.infoUser = action.payload;
    },
  },
});

export const { setInfoUser } = userSlice.actions;

export default userSlice.reducer;
