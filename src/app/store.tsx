import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../features/slicers/searchSlice";
import toggleReducer from "../features/slicers/toggleSlice";

export const store = configureStore({
  reducer: {
    toggle: toggleReducer,
    search: searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
