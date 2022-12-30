function Task(props) {
  const className = props.state
    ? "rounded-lg p-3 bg-lime-400 my-3"
    : "rounded-lg p-3 bg-red-800 line-through my-3";
  return (
    <div className="flex justify-between items-center">
      <div
        onClick={props.markTask}
        className={`${className} w-[80%] hover:opacity-70 cursor-pointer flex justify-between items-center`}
      >
        <strong>{props.name}</strong>
      </div>
      <i
        class="fa-solid fa-circle-info cursor-pointer"
        onClick={props.modalInfoTask}
      ></i>

      <i
        class="fa-solid fa-trash justify-end cursor-pointer"
        onClick={props.modalDeleteTask}
      ></i>
    </div>
  );
}

export default Task;
