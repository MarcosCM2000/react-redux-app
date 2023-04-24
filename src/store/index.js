import { createStore } from "redux";
//  1. Create reducerFn
const counterReducer = (state = { counter: 0 }, action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1
        }    
    }
    else if (action.type === 'decrement') {
        return {
            counter: state.counter - 1
        }    
    }
    return state;
};
//  2. Create store
const store = createStore(counterReducer);
//  3. Connect react app with redux store
export default store;