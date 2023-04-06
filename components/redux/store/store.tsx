import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { shoppingCart_reducer, shoppingCart_reducerV2, todo_reducer } from "../reducer/reducer";

const store = configureStore({
    reducer: combineReducers({
        todo_reducer,
        shoppingCart_reducer,
        shoppingCart_reducerV2,
    }),
    middleware: [thunk]
});

export default store;
