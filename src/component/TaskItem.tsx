const TaskItem = (props: { todo: TodoItem }) => {
  const { todo } = props;
  return (
    <div className="task-item">
      <div className="task-item-detail">
        <input
          type="checkbox"
          id={todo.id}
          name={todo.id}
          checked={todo.completed}
        />
        <label htmlFor={todo.id} style={{ marginLeft: "16px" }}>
          {todo.title}
        </label>
      </div>
    </div>
  );
};

export default TaskItem;
