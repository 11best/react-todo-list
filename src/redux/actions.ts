import { SET_TODOS } from "./constant";

export const increment = (score = 1) => ({
  type: "INCREMENT",
  score,
});

export const decrement = (score = -1) => ({
  type: "DECREMENT",
  score,
});

export const setTodos = (payload: any) => ({
  type: SET_TODOS,
  payload,
});
