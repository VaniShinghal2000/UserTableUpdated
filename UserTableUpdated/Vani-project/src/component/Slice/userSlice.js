

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await axios.get('https://dummyjson.com/users');
  return response.data.users.map((user) => ({
    firstName: user.firstName,
    lastName: user.lastName,
    age: user.age,
    address: `${user.address.address}, ${user.address.city}, ${user.address.state}`,
    email: user.email,
    phone: user.phone,
    dateOfBirth: user.birthDate,
    image: user.image,
  }));
});

const userSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
