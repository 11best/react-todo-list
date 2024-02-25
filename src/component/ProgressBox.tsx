const ProgressBox = (props: { data: TodoItem[] }) => {
  const { data } = props;

  const completedTask = data.filter((d) => d.completed).length;

  return (
    <div className="progress-container">
      <div className="progress-detail">
        <p style={{ fontSize: "28px", fontWeight: "500", margin: "0" }}>
          Progress
        </p>
        <progress id="progress-task" value={completedTask} max={data.length} />
        <span style={{ color: "#ebb9b8" }}>{completedTask} completed</span>
      </div>
    </div>
  );
};

export default ProgressBox;
