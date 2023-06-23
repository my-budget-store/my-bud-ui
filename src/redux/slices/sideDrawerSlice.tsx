import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SideDrawerState {
  isMenuSideDrawerVisible: boolean;
  isAccountSideDrawerVisible: boolean;
}

const initialState: SideDrawerState = {
  isMenuSideDrawerVisible: false,
  isAccountSideDrawerVisible: false,
};

const sideDrawerSlice = createSlice({
  name: "sideDrawer",
  initialState,
  reducers: {
    toggleMenuSideDrawer: (state, action: PayloadAction<boolean>): void => {
      state.isMenuSideDrawerVisible = action.payload;
    },
    toggleAccountSideDrawer: (state, action: PayloadAction<boolean>): void => {
      state.isAccountSideDrawerVisible = action.payload;
    },
  },
});

export const {
  toggleMenuSideDrawer,
  toggleAccountSideDrawer,
} = sideDrawerSlice.actions;
export default sideDrawerSlice.reducer;
