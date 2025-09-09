import { createSlice } from "@reduxjs/toolkit";

export interface DashboardState {
  walletCreated: boolean;
}

const initialState: DashboardState = {
  walletCreated: false,
};

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    updateWalletCreated: (state, action) => {
      state.walletCreated = action.payload;
    },
    resetDashboard: () => initialState,
  },
});

export const { updateWalletCreated, resetDashboard } = dashboardSlice.actions;

export default dashboardSlice.reducer;
