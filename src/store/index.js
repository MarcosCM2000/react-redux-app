//  import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit"; //more powerful than reducer

import authSliceReducer from "./auth-slice";
import counterSliceReducer from "./counter-slice";

//  1. Create reducerFn
/* const counterReducer = (state = initialState, action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1,
            showCounter: state.showCounter
        }    
    }
    else if (action.type === 'increase') {
        return {
            counter: state.counter + action.amount,
            showCounter: state.showCounter
        }    
    }
    else if (action.type === 'decrement') {
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter
        }    
    }
    else if (action.type === 'toggle') {
        return {
            counter: state.counter,
            showCounter: !state.showCounter
        }
    }
    return state;
};*/
//  2. Create store
const store = configureStore({
    reducer: {
        auth: authSliceReducer,
        counter: counterSliceReducer,
    }
});
//  3. Connect react app with redux store
export default store;