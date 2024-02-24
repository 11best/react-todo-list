import { SET_TODOS } from "./constant";

export const setTodos = (payload: any) => ({
  type: SET_TODOS,
  payload,
});
