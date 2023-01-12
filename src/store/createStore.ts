import { combineReducers, configureStore } from "@reduxjs/toolkit";
import applicationSlice from "./slices/applicationSlice";
import authSlice from "./slices/authSlice";
import teamSlice from "./slices/teamSlice";

export const reducer = combineReducers({
  auth: authSlice,
  team: teamSlice,
  appData: applicationSlice
});

export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => 
    getDefaultMiddleware({serializableCheck: false})
});

export default store;