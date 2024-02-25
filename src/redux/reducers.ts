import { PayloadAction } from "@reduxjs/toolkit";
import { CREATE_TODO, FETCH_TODOS } from "./constant";

const initialState: State = {
  todos: [],
};

const todoListReducer = (
  state = initialState,
  action: PayloadAction<any>
): State => {
  switch (action.type) {
    case FETCH_TODOS:
      return { ...state, todos: action.payload };
    case CREATE_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    default:
      return state;
  }
};

export default todoListReducer;
