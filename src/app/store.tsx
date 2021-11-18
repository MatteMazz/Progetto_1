import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../features/slicers/searchSlice";
import toggleReducer from "../features/slicers/toggleSlice";
import variantsReducer from "../features/slicers/variantSlice";

export const store = configureStore({
  reducer: {
    toggle: toggleReducer,
    search: searchReducer,
    variants: variantsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
