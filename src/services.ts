import { setTodos } from "./redux/actions";
import { AppDispatch } from "./redux/store";

export const fetchTodos = () => async (dispatch: AppDispatch) => {
  const res = await fetch("http://localhost:3001/todos");
  const json = (await res.json()) as TodoItem[];
  dispatch(setTodos(json));
  return json;
};
