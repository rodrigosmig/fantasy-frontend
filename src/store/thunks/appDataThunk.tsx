import { createAsyncThunk } from "@reduxjs/toolkit";
import { applicationService } from "services/apiService/applicationService";

export const getAppData = createAsyncThunk(
  'application/getAppData',
  async (_, thunkAPI) => {
    try {
      const response = await applicationService.getAppData()

      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
)