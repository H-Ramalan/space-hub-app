import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const rocketSlice = createSlice({
  name: "rocket",
  initialState,
  reducers: {},
});

export const rocketReducer = rocketSlice.reducer;
