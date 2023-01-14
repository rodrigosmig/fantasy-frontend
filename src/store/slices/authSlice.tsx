import { StatHelpText } from "@chakra-ui/react";
import { AnyAction, createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { tokenService } from "services/tokenService";
import { getUser, signIn } from "store/thunks/authThunk";
import { AuthType } from "types/auth";

export const initialState = {
  isLoading: true,
  token: '',
  user: {},
  isAuthenticated: false,
} as AuthType

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: () => {
      tokenService.delete(null);
      return initialState;
    },
    setAuthenticated: (state) => {
      state.isAuthenticated = true;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(
        signIn.pending,
        state => {
          state.isLoading = true;
          state.isAuthenticated = false;
        }
      )
      .addCase(
        signIn.fulfilled,
        (state, { payload }) => {
          const {token} = payload;

          state.isLoading = false;
          state.isAuthenticated = true;
          state.token = token
        }
      )
      .addCase(
        getUser.fulfilled,
        (state, { payload }) => {
          state.user = payload
          state.isLoading = false;
        }
      )
      .addCase(
        getUser.pending,
        state => {
          state.isLoading = true;
        }
      )
  }  
});

export const { logout, setAuthenticated } = authSlice.actions

export default authSlice.reducer