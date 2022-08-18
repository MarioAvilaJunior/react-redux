import { createSlice } from "@reduxjs/toolkit";

export interface IAuth {
  isLogged: boolean;
}

const initialAuthState: IAuth = { isLogged: false };

const authSlicer = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isLogged = true;
    },
    logout(state) {
      state.isLogged = false;
    },
  },
});

export const authActions = authSlicer.actions;

export default authSlicer.reducer;
