import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import general from "./reducer";
import logger from "redux-logger";
import {
  incAndDecMiddleware,
  resetMiddleware,
  fetchMiddleware
} from "./middleware";

const rootReducer = combineReducers({
  math: general
});

// Store with Middleware

export const store = createStore(
  rootReducer,
  undefined,
  applyMiddleware(incAndDecMiddleware, resetMiddleware, fetchMiddleware, logger)
);

// Store with 'thunks'

// export const store = createStore(
//   rootReducer,
//   undefined,
//   applyMiddleware(thunk, logger)
// );

export type RootState = ReturnType<typeof rootReducer>;
