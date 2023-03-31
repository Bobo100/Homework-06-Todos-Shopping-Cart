import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { shoppingCart_reducer, todo_reducer } from "../reducer/reducer";

const store = configureStore({
    reducer: combineReducers({
        todo_reducer,
        shoppingCart_reducer
    }),
    middleware: [thunk]
});

export default store;
