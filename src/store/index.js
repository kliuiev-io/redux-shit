import { applyMiddleware, createStore } from "redux";
import { counterReducer } from "./reducers/counterReducer";
import thunk from "redux-thunk";


export const store = createStore(counterReducer, applyMiddleware(thunk));