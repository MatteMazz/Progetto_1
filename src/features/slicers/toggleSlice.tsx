import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface SelectState {
  value: string;
}

const initialState: SelectState = {
  value: "none" || "in" || "out",
};

export const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    setToggle: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setToggle } = toggleSlice.actions;
export const selectToggle = (state: RootState) => state.toggle.value;
export default toggleSlice.reducer;
