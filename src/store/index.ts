import { createSlice, configureStore } from "@reduxjs/toolkit";

type actions = "INCREMENT" | "DECREMENT";

export interface IState {
  counter: number;
  showCounter: boolean;
}

const initialState = { counter: 0, showCounter: true } as IState;

const counterSlicer = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const store = configureStore({ reducer: counterSlicer.reducer });

export const counterActions = counterSlicer.actions;

export default store;
