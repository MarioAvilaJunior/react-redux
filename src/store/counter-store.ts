import { createSlice } from "@reduxjs/toolkit";

export interface ICounter {
  counter: number;
  showCounter: boolean;
}

const initialCounterState = { counter: 0, showCounter: true } as ICounter;

const counterSlicer = createSlice({
  name: "counter",
  initialState: initialCounterState,
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

export const counterActions = counterSlicer.actions;

export default counterSlicer.reducer;
