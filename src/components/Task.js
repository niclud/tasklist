function Task(props) {
  const className = props.state
    ? "rounded-lg p-3 bg-lime-400 my-3"
    : "rounded-lg p-3 bg-red-800 line-through my-3";
  return (
    <div onClick={props.markTask} className={`${className} cursor-pointer`}>
      <strong>{props.name}</strong>
    </div>
  );
}

export default Task;
