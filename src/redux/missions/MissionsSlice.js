import { createAsuncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const urlApi = 'https://api.spacexdata.com/v3/missions';

const initialState = {
  loading: false,
  missions: [],
  error: '',
};

const fetchData = (data) =>
  data.map((mission) => ({
    id: mission.mission_id,
    name: mission.mission_name,
    description: mission.description,
  }));

export const fetchMissions = createAsuncThunk(
  'missions/fetchMissions',
  async () => {
    try {
      const response = await axios.get(urlApi);
      const { data } = response;
      return fetchData(data);
    } catch (error) {
      throw Error(error);
    }
  }
);
