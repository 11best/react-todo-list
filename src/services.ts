import { setTodos } from "./redux/actions";

export const fetchTodos = () => async (dispatch: any) => {
  const res = await fetch("http://localhost:3001/todos");
  const json = await res.json();
  dispatch(setTodos(json));
};
