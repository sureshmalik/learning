import React from "react";

function Concept8() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Redux - Complete Guide</h2>
      
      <div className="space-y-6">
        <section>
          <h3 className="text-xl font-semibold mb-2">What is Redux?</h3>
          <div className="bg-yellow-50 p-4 rounded">
            <p className="mb-3">
              Redux is a predictable state container for JavaScript applications. It helps you manage global state 
              that needs to be accessed by many components in your application.
            </p>
            <p className="font-semibold mb-2">Core Principles:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li><strong>Single Source of Truth:</strong> One global store for entire app state</li>
              <li><strong>State is Read-Only:</strong> Only way to change state is to dispatch an action</li>
              <li><strong>Changes via Pure Functions:</strong> Reducers are pure functions that return new state</li>
            </ul>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2">Redux Flow Diagram</h3>
          <div className="bg-blue-50 p-4 rounded">
            <pre className="text-sm">
{`Component → dispatch(action) → Reducer → Store → Component
     ↑                                                  ↓
     └──────────────── subscribe ─────────────────────┘`}
            </pre>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2">Step 1: Define Actions</h3>
          <p className="mb-2 text-gray-700">Actions are plain JavaScript objects that describe what happened</p>
          <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto">
{`// actions.js
export const increment = () => {
  return {
    type: "INCREMENT",
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

export const incrementAge = () => {
  return {
    type: "INCREMENT_AGE",
  };
};

export const decrementAge = () => {
  return {
    type: "DECREMENT_AGE",
  };
};

// Action with payload
export const setUser = (user) => {
  return {
    type: "SET_USER",
    payload: user,
  };
};`}
          </pre>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2">Step 2: Create Reducer</h3>
          <p className="mb-2 text-gray-700">Reducers specify how the state changes in response to actions</p>
          <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto">
{`// reducers.js
const initialState = {
  counter: 0,
  age: 20,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 };
    
    case "DECREMENT":
      return { ...state, counter: state.counter - 1 };
    
    case "INCREMENT_AGE":
      return { ...state, age: state.age + 1 };
    
    case "DECREMENT_AGE":
      return { ...state, age: state.age - 1 };
    
    case "SET_USER":
      return { ...state, user: action.payload };
    
    default:
      return state;
  }
};

export default rootReducer;`}
          </pre>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2">Step 3: Create Store (Redux Toolkit)</h3>
          <p className="mb-2 text-gray-700">Modern way using Redux Toolkit</p>
          <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto">
{`// store.js
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

const store = configureStore({
  reducer: rootReducer,
});

export default store;`}
          </pre>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2">Step 4: Provide Store to App</h3>
          <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto">
{`// index.js
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);`}
          </pre>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2">Step 5: Use in Components</h3>
          <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto">
{`import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementAge, decrementAge } from "./actions";

function ReduxExample() {
  // Access state from store
  const { counter, age } = useSelector((state) => state);
  
  // Get dispatch function
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* Counter Section */}
      <h1 className="text-2xl font-bold">Counter: {counter}</h1>
      <div className="flex space-x-2 mb-8">
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>

      {/* Age Section */}
      <h1 className="text-2xl font-bold">Age: {age}</h1>
      <div className="flex space-x-2">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
          onClick={() => dispatch(incrementAge())}
        >
          Increment Age
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
          onClick={() => dispatch(decrementAge())}
        >
          Decrement Age
        </button>
      </div>
    </div>
  );
}

export default ReduxExample;`}
          </pre>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2">Modern Approach: Redux Toolkit Slice</h3>
          <p className="mb-2 text-gray-700">Recommended way - combines actions and reducers</p>
          <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto">
{`// counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    age: 20,
  },
  reducers: {
    increment: (state) => {
      state.value += 1; // Redux Toolkit uses Immer, can mutate directly
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementAge: (state) => {
      state.age += 1;
    },
    decrementAge: (state) => {
      state.age -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Export actions
export const { increment, decrement, incrementAge, decrementAge, incrementByAmount } = 
  counterSlice.actions;

// Export reducer
export default counterSlice.reducer;

// Store configuration
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;`}
          </pre>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2">Using Redux Toolkit Slice in Component</h3>
          <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto">
{`import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./counterSlice";

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
    </div>
  );
}`}
          </pre>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2">Multiple Reducers (Combine)</h3>
          <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto">
{`import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import userReducer from "./userSlice";
import todoReducer from "./todoSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    todos: todoReducer,
  },
});

// Access in component
const count = useSelector((state) => state.counter.value);
const user = useSelector((state) => state.user.currentUser);
const todos = useSelector((state) => state.todos.items);`}
          </pre>
        </section>

        <section className="bg-green-50 p-4 rounded">
          <h3 className="text-xl font-semibold mb-3">Key Hooks:</h3>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              <strong>useSelector:</strong> Extract data from Redux store
              <pre className="bg-gray-800 text-white p-2 mt-1 rounded text-sm">
{`const value = useSelector((state) => state.counter.value);`}
              </pre>
            </li>
            <li>
              <strong>useDispatch:</strong> Get dispatch function to send actions
              <pre className="bg-gray-800 text-white p-2 mt-1 rounded text-sm">
{`const dispatch = useDispatch();
dispatch(increment());`}
              </pre>
            </li>
          </ul>
        </section>

        <section className="bg-blue-50 p-4 rounded">
          <h3 className="text-xl font-semibold mb-3">When to Use Redux?</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2 text-green-700">✅ Use Redux When:</h4>
              <ul className="list-disc ml-6 space-y-1">
                <li>Large amount of app state</li>
                <li>State used in many places</li>
                <li>State updates frequently</li>
                <li>Complex state update logic</li>
                <li>Large codebase with many developers</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-red-700">❌ Don't Use Redux When:</h4>
              <ul className="list-disc ml-6 space-y-1">
                <li>Small app with simple state</li>
                <li>State is mostly local to components</li>
                <li>Just learning React</li>
                <li>Context API is sufficient</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-purple-50 p-4 rounded">
          <h3 className="text-xl font-semibold mb-3">Redux vs Context API:</h3>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2">
                <th className="text-left p-2">Feature</th>
                <th className="text-left p-2">Redux</th>
                <th className="text-left p-2">Context API</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-2">Setup</td>
                <td className="p-2">More complex</td>
                <td className="p-2">Simple</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">Performance</td>
                <td className="p-2">Optimized</td>
                <td className="p-2">Can cause re-renders</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">DevTools</td>
                <td className="p-2">Excellent</td>
                <td className="p-2">Limited</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">Middleware</td>
                <td className="p-2">Yes (Redux Thunk, Saga)</td>
                <td className="p-2">No</td>
              </tr>
              <tr>
                <td className="p-2">Use Case</td>
                <td className="p-2">Large apps</td>
                <td className="p-2">Small to medium apps</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="bg-orange-50 p-4 rounded">
          <h3 className="text-xl font-semibold mb-3">Key Takeaways:</h3>
          <ul className="list-disc ml-6 space-y-1">
            <li>Redux provides predictable state management</li>
            <li>Use Redux Toolkit for modern, simpler Redux code</li>
            <li>Actions describe what happened, reducers specify how state changes</li>
            <li>Always return new state objects (immutability)</li>
            <li>Use Redux DevTools for debugging</li>
            <li>Consider Context API for simpler state needs</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Concept8;
