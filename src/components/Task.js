function Task(props) {
  const className = props.state ? "" : "uppercase m-16 p-5";
  return (
    <div className={`bg-yellow-400 rounded-lg p-3 ${className}`}>
      <strong onClick={props.markTask}>{props.name}</strong>
    </div>
  );
}

export default Task;
