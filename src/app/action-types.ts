import { Posts } from "./reducer";

export enum Types {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
  RESET = "RESET",
  FETCH = "FETCH"
}

interface Increment {
  type: Types.INCREMENT;
  payload: number;
}

interface Decrement {
  type: Types.DECREMENT;
  payload: number;
}

interface Reset {
  type: Types.RESET;
}

interface Fetch {
  type: Types.FETCH;
  payload: Posts[];
}

export type Actions = Increment | Decrement | Reset | Fetch;
