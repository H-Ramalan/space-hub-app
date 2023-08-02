import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const missionSlice = createSlice({
  name: 'mission',
  initialState,
  reducers: {},
});

const missionReducer = missionSlice.reducer;
export default missionReducer;
