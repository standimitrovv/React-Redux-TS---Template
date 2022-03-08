import { Actions, Types } from "./action-types";

export interface Posts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface InitState {
  value: number;
  posts: [] | Posts[];
}

const initState: InitState = { value: 0, posts: [] };

const reducer = (state = initState, action: Actions) => {
  switch (action.type) {
    case Types.INCREMENT:
      return {
        ...state,
        value: state.value + action.payload
      };
    case Types.DECREMENT:
      return {
        ...state,
        value: state.value - action.payload
      };
    case Types.RESET:
      return {
        ...state,
        value: 0,
        posts: []
      };
    case Types.FETCH:
      return {
        ...state,
        posts: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
