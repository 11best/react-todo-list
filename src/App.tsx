import "./App.scss";
import Filter from "./component/Filter";
import ProgressBox from "./component/ProgressBox";
import TaskInput from "./component/TaskInput";
import TaskItem from "./component/TaskItem";
import { fetchTodos } from "./redux/actions";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { useEffect, useMemo, useState } from "react";

function App() {
  const todos = useAppSelector((state) => state.todos);
  const dispatch = useAppDispatch();

  const [currentFilter, setCurrentFilter] = useState("All");

  console.log(todos, currentFilter);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const filterTodo = (filter: string, list: TodoItem[]) => {
    switch (filter) {
      case "Done":
        return list.filter((l) => l.completed === true);
      case "Undone":
        return list.filter((l) => l.completed === false);
      default:
        return list;
    }
  };

  const filteredTodoList = useMemo(
    () => filterTodo(currentFilter, todos),
    [todos, currentFilter]
  );

  return (
    <div className="container">
      <div className="list-wrapper">
        <ProgressBox data={todos} />
        <div className="task-wrapper">
          <div className="task-title-wrapper">
            <h2 style={{ fontSize: "24px", fontWeight: "500" }}>Tasks</h2>
            <Filter
              currentFilter={currentFilter}
              setCurrentFilter={setCurrentFilter}
            />
          </div>
          <div className="task-item-wrapper">
            {filteredTodoList.map((todo: TodoItem) => (
              <TaskItem key={todo.id} todo={todo} />
            ))}
            <TaskInput />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
