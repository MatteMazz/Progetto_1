import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface SearchState {
  value: string;
}

const initialState: SearchState = {
  value: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setSearchTerm } = searchSlice.actions;

export const selectSearch = (state: RootState) => state.search.value;

export default searchSlice.reducer;
