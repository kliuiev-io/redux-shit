import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const json = await response.json();
  return json;
});

export default createSlice({
  name: 'users',
  initialState: [],
  reducers: {
      addUser: (store, action) => {
          store.push(action.payload);
      },

      removeUser: (store, action) => {
          const idx = store.indexOf(action.payload);

          if (idx === -1) return;

          store.splice(idx, 1);
      },
  },
  extraReducers: {
      [fetchUsers.fulfilled]: (store, action) => {
          store.push(...action.payload);
      }
  }
});
