import "./App.scss";
import TaskInput from "./component/TaskInput";
import TaskItem from "./component/TaskItem";
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
    <div className="container">
      {/* <button onClick={() => dispatch(createTodos())}>create test</button> */}
      <div className="list-wrapper">
        {/* progress box */}
        <div className="progress-container">
          <div className="progress-detail">
            <p style={{ fontSize: "28px", fontWeight: "500", margin: "0" }}>
              Progress
            </p>
            <div
              style={{
                height: "8px",
                width: "100%",
                borderRadius: "99px",
                backgroundColor: "#3b3b3b",
              }}
            ></div>
            <span style={{ color: "#ebb9b8" }}>12 completed</span>
          </div>
        </div>
        {/* task */}
        <div className="task-wrapper">
          <div className="task-title-wrapper">
            <h2 style={{ fontSize: "24px", fontWeight: "500" }}>Tasks</h2>
            <div style={{ border: "1px solid black", padding: "4px" }}>
              filter
            </div>
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
