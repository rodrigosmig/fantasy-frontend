import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { changeTeam, getTeam } from "store/thunks/teamThunk";
import { Team, TeamType } from "types/team";

export const initialState = {
  isLoading: true,
  team: {} as Team,
  players: [],
} as TeamType

const teamSlice = createSlice({
  name: 'team',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(
        getTeam.pending,
        state => {
          state.isLoading = true;
        }
      )
      .addCase(
        getTeam.fulfilled,
        (state, action) => {
          state.isLoading = false;
          state.team = action.payload
        }
      )
      .addCase(
        changeTeam.pending,
        state => {
          state.isLoading = true;
        }
      )
      .addCase(
        changeTeam.fulfilled,
        (state, action) => {
          state.isLoading = false;
          state.team = action.payload
        }
      )
  }  
});

export default teamSlice.reducer