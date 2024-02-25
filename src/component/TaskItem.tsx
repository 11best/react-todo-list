import { ChangeEvent } from "react";
import { setDoneTodo } from "../redux/actions";
import { useAppDispatch } from "../redux/hooks";
import MeatBalls from "./MeatBalls";

const TaskItem = (props: { todo: TodoItem }) => {
  const { todo } = props;
  const dispatch = useAppDispatch();

  const markAsDone = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target;
    dispatch(setDoneTodo(id, checked));
  };

  return (
    <div className="task-item">
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
        <MeatBalls />
      </div>
    </div>
  );
};

export default TaskItem;
