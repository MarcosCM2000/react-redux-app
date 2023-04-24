import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

import { counterActions } from '../store/counter-slice';

const Counter = () => {
  //Extracts only counter property of state object
  const counter = useSelector(state => state.counter.counter);
  const showCounter = useSelector(state => state.counter.showCounter);
  const dispatch = useDispatch();
  const incrementCounterHandler = () => {
    dispatch(counterActions.increment());
    //dispatch({ type: 'increment'});
  };
  const increaseCounterHandler = () => {
    dispatch(counterActions.increase(5));
    //dispatch({ type: 'increase', amount: 5});
  };
  const decrementCounterHandler = () => {
    dispatch(counterActions.decrement());
    //dispatch({ type: 'decrement' });
  };
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
    //dispatch({ type: 'toggle' });
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
