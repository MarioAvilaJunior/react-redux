import { createStore } from "redux";

type actions = "INCREMENT" | "DECREMENT";

export interface IState {
  counter: number;
}

const counterReducer = (
  state: IState = { counter: 0 },
  action: any
): IState => {
  switch (action) {
    case "INCREMENT": {
      return { counter: state.counter + 1 };
    }
    case "DECREMENT": {
      return { counter: state.counter - 1 };
    }
    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;
