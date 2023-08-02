import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const rocketSlice = createSlice({
  name: 'rocket',
  initialState,
  reducers: {},
});

const rocketReducer = rocketSlice.reducer;

export default rocketReducer;
