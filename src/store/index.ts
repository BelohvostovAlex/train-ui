import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { allReducers } from "./slices";

const rootReducer = combineReducers(allReducers);

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
