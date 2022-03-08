import { Dispatch } from "redux";
import { createAction } from "typesafe-actions";
import { Actions, Types } from "./action-types";

// When dispatching actions with "thunks"

// export const increment = (value: number) => {
//   return (dispatch: Dispatch<Actions>) => {
//     dispatch({ type: Types.INCREMENT, payload: value });
//   };
// };

// export const decrement = (value: number) => {
//   return (dispatch: Dispatch<Actions>) => {
//     dispatch({ type: Types.DECREMENT, payload: value });
//   };
// };

// Creating actions with 'typesafe-actions'
export const increment = createAction(Types.INCREMENT)<number>();
export const decrement = createAction(Types.DECREMENT)<number>();
export const reset = createAction(Types.RESET)<undefined>();
export const fetch = createAction(Types.FETCH)<undefined>();
