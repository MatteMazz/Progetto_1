import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Product } from "../../data/Data";

export interface VariantState {
  value: Product | Omit<Product, "variants"> | null;
}

const initialState: VariantState = {
  value: null,
};

export const variantSlice = createSlice({
  name: "variants",
  initialState,
  reducers: {
    setVariants: (
      state,
      action: PayloadAction<Product | Omit<Product, "variants"> | null>
    ) => {
      state.value = action.payload;
    },
  },
});

export const { setVariants } = variantSlice.actions;
export const selectVariants = (state: RootState) => state.variants.value;
export default variantSlice.reducer;
