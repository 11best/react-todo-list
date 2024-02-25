import { useState } from "react";
import { useAppDispatch } from "../redux/hooks";
import { createTodos } from "../redux/actions";

const TaskInput = () => {
  const [title, setTitle] = useState("");
  const dispatch = useAppDispatch();

  const handleCreateTask = () => {
    dispatch(createTodos(title));
    setTitle("");
  };

  return (
    <div className="task-item">
      <input
        className="task-item-input"
        type="text"
        placeholder="Add your todo..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {title && <button onClick={() => handleCreateTask()}>Save</button>}
    </div>
  );
};

export default TaskInput;
