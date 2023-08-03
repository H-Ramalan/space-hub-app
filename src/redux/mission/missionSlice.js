import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import transformMissionData from '../../helpers/transformData';

export const getMissions = createAsyncThunk('mission/getMission', async () => {
  try {
    const response = await axios.get('https://api.spacexdata.com/v3/missions');
    const data = transformMissionData(response.data);
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
export const joinAMission = (index, id) => async (dispatch) => {
  dispatch(joinMission(index));
  const joinedMissions = JSON.parse(localStorage.getItem('joined_missions')) || [];
  joinedMissions.push(id);
  localStorage.setItem('joined_missions', JSON.stringify(joinedMissions));
};

export const leaveAMission = (index, id) => async (dispatch) => {
  dispatch(leaveMission(index));
  const joinedMissions = JSON.parse(localStorage.getItem('joined_missions')) || [];
  const newState = joinedMissions.filter((i) => i !== id);
  localStorage.setItem('joined_missions', JSON.stringify(newState));
};
