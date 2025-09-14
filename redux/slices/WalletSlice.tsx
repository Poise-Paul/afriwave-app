import { createSlice } from "@reduxjs/toolkit";

export interface WalletState {
  selWallet: string;
}

const initialState: WalletState = {
  selWallet: "USD",
};

export const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    updateSelWallet: (state, action) => {
      state.selWallet = action.payload;
    },
    resetWallet: () => initialState,
  },
});

export const { updateSelWallet } = walletSlice.actions;

export default walletSlice.reducer;
