import { createSlice } from "@reduxjs/toolkit";
import { getAppData } from "store/thunks/appDataThunk";
import { ApplicationData } from "types/application";

export const initialState = {
  isLoading: true,
  paises: [],
  posicoes: [],
  formacoes: []
} as ApplicationData

const applicationSlice = createSlice({
  name: 'applicationData',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(
      getAppData.pending,
      state => {
        state.isLoading = true;
      }
    )
    .addCase(
      getAppData.fulfilled,
      (state, { payload }) => {
        state.paises = payload.paises
        state.posicoes = payload.posicoes
        state.formacoes = payload.formacoes
        state.isLoading = false;
      }
    )
  }  
});

export default applicationSlice.reducer