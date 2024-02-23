import { SET_TODOS } from "./constant";

const initialState = {
  score: 0,
  todos: [],
};

const todoListReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, score: state.score + action.score };
    case "DECREMENT":
      return { ...state, score: state.score - action.score };
    case SET_TODOS:
      return { ...state, todos: action.payload };
    default:
      return state;
  }
};

export default todoListReducer;
