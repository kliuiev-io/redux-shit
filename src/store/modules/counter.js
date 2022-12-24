import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: 'counter',
  initialState: {
      counter: 20,
  },
  reducers: {
      increaseCounter: (store, action) => {
          store.counter += Number(action.payload);
      },

      decreaseCounter: (store, action) => {
          store.counter -= Number(action.payload);
      },
  },
});
