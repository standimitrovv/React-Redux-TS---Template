import { Middleware } from "redux";
import { RootState } from "./store";
import { Types } from "./action-types";

export const incAndDecMiddleware: Middleware<{}, RootState> = ({
  dispatch,
  getState
}) => (next) => (action) => {
  console.log("in the inc/dec middleware", action);

  if (action.type === "START_INCREMENT") {
    dispatch({ type: Types.INCREMENT, payload: action.payload });
  }

  return next(action);
};

export const resetMiddleware: Middleware<{}, RootState> = ({
  dispatch,
  getState
}) => (next) => (action) => {
  console.log("in the reset middleware", action);
  return next(action);
};

export const fetchMiddleware: Middleware<{}, RootState> = ({
  dispatch,
  getState
}) => (next) => (action) => {
  console.log("in the fetch middleware", action);
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => {
      if (action.type === Types.FETCH) {
        // dispatch({ type: action.type, payload: json });
        return next({ type: action.type, payload: json });
      } else return next(action);
    });
};

// ALWAYS return next(action) in every middleware
// so the action can reach the reducer
