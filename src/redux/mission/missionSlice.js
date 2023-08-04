import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getMissions = createAsyncThunk('mission/getMission', async () => {
  try {
    const response = await fetch('https://api.spacexdata.com/v3/missions');
    const data = await response.json()
    return data;
  } catch (error) {
    return error.message;
  }
});
const initialState = {
  missions: [],
  isLoading: true,
  isError: false,
  error: null,
};

const missionSlice = createSlice({
  name: 'mission',
  initialState,
  reducers: {
    joinMission: (state, action) => {
      const newState = [...state.missions];

      newState[action.payload] = {
        ...newState[action.payload],
        joined_mission: true,
      };
      return {
        ...state,
        missions: newState,
      };
    },
    leaveMission: (state, action) => {
      const newState = [...state.missions];

      newState[action.payload] = {
        ...newState[action.payload],
        joined_mission: false,
      };
      return {
        ...state,
        missions: newState,
      };
    },
  },
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

export const { joinMission, leaveMission } = missionSlice.actions;
const missionReducer = missionSlice.reducer;
export default missionReducer;

// actions
export const joinAMission = (index) => async (dispatch) => {
  dispatch(joinMission(index));
};

export const leaveAMission = (index) => async (dispatch) => {
  dispatch(leaveMission(index));
};
