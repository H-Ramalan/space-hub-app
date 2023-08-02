import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const missionSlice = createSlice({
  name: "mission",
  initialState,
  reducers: {},
});

export const missionReducer = missionSlice.reducer;
