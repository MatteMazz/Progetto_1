import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../features/counter/searchSlice";
import toggleReducer from "../features/counter/toggleSlice";

export const store = configureStore({
  reducer: {
    toggle: toggleReducer,
    search: searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
