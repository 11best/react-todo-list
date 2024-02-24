import { SET_TODOS } from "./constant";

const initialState = {
  todos: [],
};

const todoListReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_TODOS:
      return { ...state, todos: action.payload };
    default:
      return state;
  }
};

export default todoListReducer;
