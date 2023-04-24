//  import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit"; //more powerful than reducer

//  ***Auth
const authInitialState = { isLoggedIn: false };
const authSlice = createSlice({
    name: 'auth',
    initialState: authInitialState,
    reducers: {
        login(state){
            state.isLoggedIn = true;
        },
        logout(state){
            state.isLoggedIn = false;
        }
    }
});
//  ***Counter
const counterInitialState = { counter: 0, showCounter: true };
const counterSlice = createSlice({
    name: 'counter',
    initialState: counterInitialState,
    reducers: {
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        increase(state, action){
            state.counter += action.payload;
        },
        toggleCounter(state){
            state.showCounter = !state.showCounter;
        },
    }
});

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
        auth: authSlice.reducer,
        counter: counterSlice.reducer,
    }
});
//  3. Connect react app with redux store
export default store;
//  redux toolkit export
export const authActions = authSlice.actions;
export const counterActions = counterSlice.actions;