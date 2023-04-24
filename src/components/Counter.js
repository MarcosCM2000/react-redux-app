import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  //Extracts only counter property of state object
  const counter = useSelector(state => state.counter);
  const showCounter = useSelector(state => state.showCounter);
  const dispatch = useDispatch();
  const incrementCounterHandler = () => {
    dispatch({ type: 'increment'});
  };
  const increaseCounterHandler = () => {
    dispatch({ type: 'increase', amount: 5});
  };
  const decrementCounterHandler = () => {
    dispatch({ type: 'decrement' });
  };
  const toggleCounterHandler = () => {
    dispatch({ type: 'toggle' });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      { showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementCounterHandler}>Increment</button>
        <button onClick={increaseCounterHandler}>Increase by 5</button>
        <button onClick={decrementCounterHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
