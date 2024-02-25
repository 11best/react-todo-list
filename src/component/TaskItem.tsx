import { ChangeEvent, useState } from "react";
import { deleteTodo, setDoneTodo } from "../redux/actions";
import { useAppDispatch } from "../redux/hooks";
import MeatBalls from "./MeatBalls";
import TaskInput from "./TaskInput";

const TaskItem = (props: { todo: TodoItem }) => {
  const { todo } = props;
  const dispatch = useAppDispatch();
  const [isMeatBallsOpen, setIsMeatBallsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const markAsDone = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target;
    dispatch(setDoneTodo(id, checked));
  };

  const handleDelete = (id: string) => {
    dispatch(deleteTodo(id));
    setIsMeatBallsOpen(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
    setIsMeatBallsOpen(false);
  };

  return (
    <div className="task-item">
      {isEditing ? (
        <TaskInput
          isEdit={isEditing}
          setIsEdit={() => setIsEditing(false)}
          data={todo}
        />
      ) : (
        <div className="task-item-detail">
          <input
            type="checkbox"
            id={todo.id}
            name={todo.id}
            checked={todo.completed}
            onChange={(e) => markAsDone(e)}
          />
          <label
            htmlFor={todo.id}
            style={{
              marginLeft: "16px",
              textDecorationLine: todo.completed ? "line-through" : "",
              color: todo.completed ? "#a9a9a9" : "",
            }}
          >
            {todo.title}
          </label>
          <MeatBalls
            isOpen={isMeatBallsOpen}
            setIsOpen={() => setIsMeatBallsOpen(!isMeatBallsOpen)}
            onDelete={() => handleDelete(todo.id)}
            onEdit={() => handleEdit()}
          />
        </div>
      )}
    </div>
  );
};

export default TaskItem;
