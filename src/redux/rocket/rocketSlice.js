import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { transformRocketData } from '../../helpers/transformData';

const url = 'https://api.spacexdata.com/v3/rockets';

const initialState = {
  rocket: [],
  error: '',
  isLoading: false,
};

const fetchRockets = createAsyncThunk('rockets/fetchRockets', async () => {
  try {
    const response = await axios.get(url);
    const { data } = response;
    const rocketData = transformRocketData(data);
    return rocketData;
  } catch (error) {
    throw new Error(error);
  }
});

const rocketsSlice = createSlice({
  name: 'rocket',
  initialState,
  reducers: {
    reserveRocket: (state, action) => {
      const newState = state.rocket.map((rocket) => {
        if (rocket.id === action.payload) {
          return { ...rocket, reserved: true };
        }
        return rocket;
      });
      return { ...state, rocket: newState };
    },
    cancelReserve: (state, action) => {
      const newState = state.rocket.map((rocket) => {
        if (rocket.id === action.payload) {
          return { ...rocket, reserved: false };
        }
        return rocket;
      });
      return { ...state, rocket: newState };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRockets.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchRockets.fulfilled, (state, action) => {
      state.isLoading = false;
      state.rocket = action.payload;
    });
    builder.addCase(fetchRockets.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { reserveRocket, cancelReserve } = rocketsSlice.actions;
export default rocketsSlice.reducer;
export { fetchRockets };
