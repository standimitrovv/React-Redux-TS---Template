import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./app/store";
import { Types } from "./app/action-types";
import { increment, decrement, reset, fetch } from "./app/action-creators";
import React, { useState } from "react";

export default function App() {
  const [userInput, setUserInput] = useState<string>("");
  const count = useSelector((state: RootState) => state.math.value);
  const posts = useSelector((state: RootState) => state.math.posts);
  const dispatch = useDispatch();

  console.log(count);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setUserInput(e.target.value);
  };

  const resetHandler = () => {
    // dispatch({type: Types.RESET})
    dispatch(reset());
    setUserInput("");
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <h1>Count is {count}</h1>
      <input
        type="number"
        min={0}
        max={99}
        value={userInput}
        onChange={onInputChange}
        style={{ width: "50%" }}
      />
      <div className="container">
        <button
          onClick={
            () => dispatch({ type: "START_INCREMENT", payload: +userInput })
            // dispatch(increment(+userInput))
          }
          disabled={!userInput}
        >
          Increment
        </button>
        <button
          onClick={() =>
            // dispatch({ type: Types.DECREMENT, payload: +userInput })
            dispatch(decrement(+userInput))
          }
          disabled={!userInput}
        >
          Decrement
        </button>
        <button onClick={resetHandler}>Reset</button>
        <button
          onClick={() =>
            // dispatch({ type: Types.FETCH })
            dispatch(fetch())
          }
        >
          Fetch
        </button>
      </div>

      {posts && posts.map((post) => <li key={post.id}>{post.title}</li>)}
    </div>
  );
}
