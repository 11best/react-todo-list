import { PayloadAction } from "@reduxjs/toolkit";
import {
  CREATE_TODO,
  DELETE_TODO,
  EDIT_TODO,
  FETCH_TODOS,
  SET_DONE_TODO,
} from "./constant";

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
    case EDIT_TODO:
    case SET_DONE_TODO: {
      const update = state.todos.map((d) => {
        if (d.id === action.payload.id) {
          return action.payload;
        } else {
          return d;
        }
      });
      return { ...state, todos: update };
    }
    case DELETE_TODO: {
      const update = state.todos.filter((t) => t.id !== action.payload);
      return { ...state, todos: update };
    }
    default:
      return state;
  }
};

export default todoListReducer;
