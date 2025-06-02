
import usersReducer from '../Slice/userSlice';
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});