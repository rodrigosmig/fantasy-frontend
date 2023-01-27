import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "hooks/useSelector";
import { teamService } from "services/apiService/teamService";
import { Team, TeamFormData } from "types/team";
import { fillPlayersByPosition, getNumberByPosition, getPlayersByPosition } from "utils/helpers";

export const getTeam = createAsyncThunk(
  'team/getTeam',
  async (_, thunkAPI) => {
    try {
      const response = await teamService.getTeam();
      const team = response.data

      const numberByPosition = getNumberByPosition(team.formacao.nome)

      let data = {
        team,
        numberByPosition,
      }

      if (team.jogadores.length === 0) {
        return {
          ...data,
          players: fillPlayersByPosition(numberByPosition)
        }
      }

      return {
        ...data,
        players: getPlayersByPosition(team.jogadores)
      }
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

export const savePlayers = createAsyncThunk<void, void, { state: RootState }>(
  'team/savePlayers',
  async (_, thunkAPI) => {
    const { team } = thunkAPI.getState().team
    const ids = team.jogadores.map(player => player.id)

    const jogadoresIds = {
      jogadoresIds: ids
    }

    try {
      await teamService.savePlayers(jogadoresIds)
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }

    thunkAPI.dispatch(getTeam());
  }
)