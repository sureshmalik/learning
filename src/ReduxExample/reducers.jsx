const initialState = {
  counter: 0,
  age: 20, // set an initial age value
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
    default:
      return state;
  }
};

export default rootReducer;
