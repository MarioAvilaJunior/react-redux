import classes from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../store";
import { counterActions } from "../store/index";

const Counter = () => {
  const dispatch = useDispatch();
  const { counter, showCounter } = useSelector((state: IState) => state);

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
