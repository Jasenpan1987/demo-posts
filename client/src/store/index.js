import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./root-reducer";
import thunk from "redux-thunk";

const initState = {
  posts: [],
}

export const store = createStore(
  rootReducer,
  initState,
  applyMiddleware(thunk)
);
