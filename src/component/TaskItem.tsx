import { setDoneTodo } from "../redux/actions";
import { useAppDispatch } from "../redux/hooks";

const TaskItem = (props: { todo: TodoItem }) => {
  const { todo } = props;
  const dispatch = useAppDispatch();

  return (
    <div className="task-item">
      <div className="task-item-detail">
        <input
          type="checkbox"
          id={todo.id}
          name={todo.id}
          checked={todo.completed}
          onChange={(e) => {
            dispatch(setDoneTodo(e.target.id, e.target.checked));
          }}
        />
        <label htmlFor={todo.id} style={{ marginLeft: "16px" }}>
          {todo.title}
        </label>
      </div>
    </div>
  );
};

export default TaskItem;
