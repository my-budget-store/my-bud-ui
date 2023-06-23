import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface SearchValue {
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
      searchVal.value = action.payload;
    },
  },
});

export const { storeSearchValue } = searchValueSlice.actions;

export default searchValueSlice.reducer;
