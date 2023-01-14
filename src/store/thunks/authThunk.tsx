import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { authService } from "services/apiService/authService";
import { tokenService } from "services/tokenService";
import { setAuthenticated } from "store/slices/authSlice";
import { Login, LoginResponse } from "types/auth";
import { getAppData } from "./appDataThunk";
import { getTeam } from "./teamThunk";

export const signIn = createAsyncThunk(
  'auth/signIn',
  async (credentials: Login, thunkAPI) => {
    let response = {} as LoginResponse

    try {
      const signInResponse = await authService.signIn(credentials);
      const { token } = signInResponse.data;
      
      tokenService.save(token, null);

      response = {
        ...response,
        token
      }
    } catch (err) {
      const error = err as AxiosError
      return thunkAPI.rejectWithValue(error);
    }
    
    thunkAPI.dispatch(getUser());
    thunkAPI.dispatch(getTeam());
    thunkAPI.dispatch(getAppData());

    return response;
  }
)

export const updateData = createAsyncThunk(
  'auth/updateData',
  async (_, thunkAPI) => {
    try {
      thunkAPI.dispatch(getUser());
      thunkAPI.dispatch(getTeam());
      thunkAPI.dispatch(getAppData());
      thunkAPI.dispatch(setAuthenticated())
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
)

export const getUser = createAsyncThunk(
  'auth/getUser',
  async (_, thunkAPI) => {
    try {
      const response = await authService.me();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
)