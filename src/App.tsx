import "./App.scss";
import Filter from "./component/Filter";
import ProgressBox from "./component/ProgressBox";
import TaskInput from "./component/TaskInput";
import TaskItem from "./component/TaskItem";
import { fetchTodos } from "./redux/actions";
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
    <div className="container">
      <div className="list-wrapper">
        <ProgressBox data={todos} />
        <div className="task-wrapper">
          <div className="task-title-wrapper">
            <h2 style={{ fontSize: "24px", fontWeight: "500" }}>Tasks</h2>
            <Filter />
          </div>
          <div className="task-item-wrapper">
            {todos.map((todo: TodoItem) => (
              <TaskItem todo={todo} />
            ))}
            <TaskInput />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
