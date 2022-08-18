import { configureStore } from "@reduxjs/toolkit";
import counterReducer, { ICounter } from "./counter-store";
import authReducer, { IAuth } from "./auth-store";

export interface RootState {
  counter: ICounter;
  auth: IAuth;
}

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
