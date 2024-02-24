import { SET_TODOS } from "./constant";

export const setTodos = (payload: TodoItem[]) => ({
  type: SET_TODOS,
  payload,
});
