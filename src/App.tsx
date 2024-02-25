import "./App.scss";
import { createTodos, fetchTodos } from "./redux/actions";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { useEffect } from "react";

function App() {
  const todos = useAppSelector((state) => state.todos);
  const dispatch = useAppDispatch();
  console.log(todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div style={{ backgroundColor: "red" }}>
      <button onClick={() => dispatch(createTodos())}>create test</button>
      <div>
        {todos.map((todo: TodoItem) => (
          <p>{todo.title}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
