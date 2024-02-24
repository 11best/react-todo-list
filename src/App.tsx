import "./App.scss";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { fetchTodos } from "./services";
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
      <div className="card">
        {todos.map((todo: any) => (
          <p>{todo.title}</p>
        ))}
      </div>
    </>
  );
}

export default App;
