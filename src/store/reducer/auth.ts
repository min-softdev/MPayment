import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  logInData: any;
}

const initialState: AuthState = {
  logInData: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state: any, action: PayloadAction<any>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    logOut: () => initialState,
  },
});

export const authReducer = {
  authSlice: authSlice.reducer,
  setAuth: authSlice.actions.setAuth,
  logOut: authSlice.actions.logOut,
};
