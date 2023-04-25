import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface SearchValue {
  value: string
}

const initialState: SearchValue = {
  value: "",
}

export const searchValueSlice = createSlice({
  name: "searchVal",
  initialState,
  reducers: {
    storeSearchValue: (searchVal, action: PayloadAction<string>) => {
      console.log("value set " + action.payload);
      searchVal.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { storeSearchValue } = searchValueSlice.actions;

export default searchValueSlice.reducer;
