import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { movieReducer } from "./slices";

const rootReducer = combineReducers({
  movie: movieReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
