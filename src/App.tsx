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
    <>
      <button onClick={() => dispatch(createTodos())}>create test</button>
      <div className="card">
        {todos.map((todo: TodoItem) => (
          <p>{todo.title}</p>
        ))}
      </div>
    </>
  );
}

export default App;
