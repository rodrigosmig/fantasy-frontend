import { createAsyncThunk } from "@reduxjs/toolkit";
import { playersService } from "services/apiService/playersService";
import { FilterPlayerForm } from "types/player";

export const getAllPlayers = createAsyncThunk(
  'players/getAllPlayers',
  async (values: FilterPlayerForm, thunkAPI) => {
    try {
      const response = await playersService.get(values)

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
)