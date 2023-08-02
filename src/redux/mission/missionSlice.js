import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getMissions = createAsyncThunk("mission/getMission", async () => {
  try {
    const response = await axios.get("https://api.spacexdata.com/v3/missions");
    return response.data;
  } catch (error) {
    return error.message;
  }
});

const initialState = {
  missions: [],
  isLoading: false,
  isError: false,
  error: null,
};

const missionSlice = createSlice({
  name: "mission",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMissions.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(getMissions.fulfilled, (state, action) => {
        state.missions = action.payload;
        state.isLoading = false;
        state.isError = false;
        state.error = null;
      })
      .addCase(getMissions.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      });
  },
});

const missionReducer = missionSlice.reducer;
export default missionReducer;
