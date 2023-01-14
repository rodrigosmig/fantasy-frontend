import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { changeTeam, getTeam } from "store/thunks/teamThunk";
import { Player } from "types/player";
import { Team, TeamType } from "types/team";

export const initialState = {
  isLoading: true,
  team: {} as Team,
  numberByPosition: {
    defence: 0,
    midfield: 0,
    attack: 0,
  },
  players: {
    goalkeeper: {} as Player,
    defenders: [],
    midfielder: [],
    attacker: [],
  },
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
        (state, { payload }) => {
          state.isLoading = false;
          state.numberByPosition = payload.numberByPosition
          state.team = payload.team
          state.players = payload.players
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