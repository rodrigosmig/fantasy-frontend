import { combineReducers, configureStore } from "@reduxjs/toolkit";
import playersSlice from "./slices/playersSlice";
import applicationSlice from "./slices/applicationSlice";
import authSlice from "./slices/authSlice";
import teamSlice from "./slices/teamSlice";

export const reducer = combineReducers({
  auth: authSlice,
  team: teamSlice,
  appData: applicationSlice,
  players: playersSlice
});

export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => 
    getDefaultMiddleware({serializableCheck: false})
});

export default store;