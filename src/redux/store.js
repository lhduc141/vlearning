import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userReducer/userSlice';
// import loadingSlice from './loadingReducer/loadingSlice';
// import movieSlice from './MovieReducer/movieSlice';

export const store = configureStore({
  reducer: {
    userReducer: userSlice,
  },
});