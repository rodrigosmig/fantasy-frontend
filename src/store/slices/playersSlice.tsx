import { createSlice } from "@reduxjs/toolkit";
import { getAllPlayers } from "store/thunks/playersThunk";
import { PlayersType } from "types/player";

export const initialState = {
  isLoading: false,
  isFetched: false,
  players: [],
  pagination: {
    offset: 0,
    totalPages: 0,
    totalElements: 0,
    size: 0,
    number: 0,
    last: false
  }
} as PlayersType

const playersSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(
        getAllPlayers.pending,
        state => {
          state.isLoading = true;
        }
      )
      .addCase(
        getAllPlayers.fulfilled,
        (state, { payload }) => {
          state.isLoading = false;
          state.isFetched = true;
          state.players = payload.content
          state.pagination = {
            offset: payload.pageable.offset,
            totalPages: payload.totalPages,
            totalElements: payload.totalElements,
            size: payload.size,
            number: payload.number,
            last: payload.last
          }
        }
      )
  }
});

export default playersSlice.reducer