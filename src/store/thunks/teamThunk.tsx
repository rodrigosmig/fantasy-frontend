import { createAsyncThunk } from "@reduxjs/toolkit";
import { teamService } from "services/apiService/teamService";
import { TeamFormData } from "types/team";

export const getTeam = createAsyncThunk(
  'team/getTeam',
  async (_, thunkAPI) => {
    try {
      const response = await teamService.getTeam();

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
)

export const changeTeam = createAsyncThunk(
  'team/changeTeam',
  async (teamData: TeamFormData, thunkAPI) => {
    try {
      const response = await teamService.changeTeam(teamData);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
)