import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { changeTeam, getTeam, savePlayers } from "store/thunks/teamThunk";
import { Player } from "types/player";
import { Team, TeamType } from "types/team";
import { POSITIONS_NAME } from "utils/enum/positions-name";
import { defaultplayer } from "utils/helpers";

export const initialState = {
  isLoading: true,
  team: {} as Team,
  hasChange: false,
  numberByPosition: {
    goalkeeper: 0,
    defenders: 0,
    midfielders: 0,
    attackers: 0
  },
  counterByPosition: {
    goalkeeper: 0,
    defenders: 0,
    midfielders: 0,
    attackers: 0
  },
  players: {
    goalkeeper: [],
    defenders: [],
    midfielders: [],
    attackers: [],
  },
} as TeamType

const teamSlice = createSlice({
  name: 'team',
  initialState,
  reducers: {
    addPlayer: (state, action: PayloadAction<Player>) => {
      const player = action.payload
      const positionName = POSITIONS_NAME[player.posicao.nome]
      const indexPosition = state.players[positionName].findIndex(p => {
        return p.id === defaultplayer.id && p.nome === defaultplayer.nome
      })

      state.players[positionName].splice(indexPosition, 1, player)
      state.team.jogadores.push(player)
      state.counterByPosition[positionName] += 1

      if (state.team.jogadores.length === 11) {
        state.hasChange = true;
      }
    },
    deletePlayer: (state, action: PayloadAction<Player>) => {
      const player = action.payload
      const positionName = POSITIONS_NAME[player.posicao.nome]

      const indexPlayerPosition = state.players[positionName].findIndex(p => p.id === player.id)
      state.players[positionName].splice(indexPlayerPosition, 1, defaultplayer)

      const indexTeamPlayer = state.team.jogadores.findIndex(p => p.id === player.id)
      state.team.jogadores.splice(indexTeamPlayer, 1)
      state.counterByPosition[positionName] -= 1
    },
  },
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

          if (payload.team.jogadores.length > 0) {
            state.counterByPosition = state.numberByPosition
          }
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
      .addCase(
        savePlayers.pending,
        state => {
          state.isLoading = true;
        }
      )
      .addCase(
        savePlayers.fulfilled,
        state => {
          state.isLoading = false;
          state.hasChange = false;
        }
      )
  }  
});

export const { addPlayer, deletePlayer } = teamSlice.actions;

export default teamSlice.reducer;