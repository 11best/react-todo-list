import { AppDispatch } from "./store";
import {
  createTodoService,
  fetchTodosService,
  markAsDoneService,
} from "../services";
import { CREATE_TODO, FETCH_TODOS, SET_DONE_TODO } from "./constant";

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

export const setDoneTodo =
  (id: string, completed: boolean) => async (dispatch: AppDispatch) => {
    try {
      const res = await markAsDoneService(id, completed);
      dispatch({ type: SET_DONE_TODO, payload: res });
    } catch (err) {
      console.error(err);
    }
  };
