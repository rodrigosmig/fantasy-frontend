import { createAsyncThunk } from "@reduxjs/toolkit";
import { teamService } from "services/apiService/teamService";
import { TeamFormData } from "types/team";
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