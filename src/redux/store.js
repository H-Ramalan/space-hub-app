import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './mission/missionSlice';
import rocketReducer from './rocket/rocketSlice';

const Store = configureStore({
  reducer: {
    mission: missionReducer,
    rocket: rocketReducer,
  },
});

export default Store;
