import { PayloadAction } from "@reduxjs/toolkit";
import { SET_TODOS } from "./constant";

const initialState: State = {
  todos: [],
};

const todoListReducer = (
  state = initialState,
  action: PayloadAction<TodoItem[]>
): State => {
  switch (action.type) {
    case SET_TODOS:
      return { ...state, todos: action.payload };
    default:
      return state;
  }
};

export default todoListReducer;
