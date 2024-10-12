import {
  increment,
  decrement,
  incrementAge,
  decrementAge,
} from "../ReduxExample/actions";
import { useSelector, useDispatch } from "react-redux";

const ReduxExample = () => {
  const { counter, age } = useSelector((state) => state);

  const dispatch = useDispatch();

  return (
    <div class = "flex flex-col items-center justify-center min-h-screen ">
      <h1>Counter: {counter}</h1>
      <div class="flex space-x-2">
        <button
          class="bg-red-300 hover:bg-red 600 text-white font-bold py-2 px-3 rounded-lg"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          class="bg-red-300 hover:bg-red 600 text-white font-bold py-2 px-3 rounded-lg"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      <h1>Age: {age}</h1>
      <div class = "flex space-x-2">
        <button
          class="bg-red-300 hover:bg-red 600 text-white font-bold py-2 px-3 rounded-lg"
          onClick={() => dispatch(incrementAge())}
        >
          Increment Age
        </button>
        <button
          class="bg-red-300 hover:bg-red 600 text-white font-bold py-2 px-3 rounded-lg"
          onClick={() => dispatch(decrementAge())}
        >
          Decrement Age
        </button>
      </div>
    </div>
  );
};
export default ReduxExample;
