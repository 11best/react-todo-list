import { useState } from "react";
import { useAppDispatch } from "../redux/hooks";
import { createTodos, editTask } from "../redux/actions";

const TaskInput = (props: {
  isEdit?: boolean;
  data?: TodoItem;
  setIsEdit?: () => void;
}) => {
  const [title, setTitle] = useState(props.data?.title || "");
  const dispatch = useAppDispatch();

  const handleCreateTask = () => {
    dispatch(createTodos(title));
    setTitle("");
  };

  const handleSaveEditedTask = () => {
    if (props.data) {
      dispatch(editTask(props.data.id, title));
      props.setIsEdit && props.setIsEdit();
    }
  };

  const handleSaveClicked = () => {
    props.isEdit ? handleSaveEditedTask() : handleCreateTask();
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
      {title && <button onClick={() => handleSaveClicked()}>Save</button>}
    </div>
  );
};

export default TaskInput;
