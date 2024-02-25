import { AppDispatch } from "./store";
import { createTodoService, fetchTodosService } from "../services";
import { CREATE_TODO, FETCH_TODOS } from "./constant";

export const fetchTodos = () => async (dispatch: AppDispatch) => {
  try {
    const res = await fetchTodosService();
    dispatch({ type: FETCH_TODOS, payload: res });
  } catch (err) {
    console.error(err);
  }
};

export const createTodos =
  () =>
  // body
  async (dispatch: AppDispatch) => {
    try {
      const res = await createTodoService();
      dispatch({ type: CREATE_TODO, payload: res });
    } catch (err) {
      console.error(err);
    }
  };
