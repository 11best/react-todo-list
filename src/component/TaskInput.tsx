const TaskInput = () => {
  return (
    <div className="task-item">
      <input
        className="task-item-input"
        type="text"
        placeholder="Add your todo..."
      />
      <button>Save</button>
    </div>
  );
};

export default TaskInput;
