import Button from "./Button";
import Task from "./Task";
function ListTask() {
  //const date = new Date();
  return (
    <div className="bg-white justify-center m-0 p-2  rounded-lg">
      <div className="grid grid-flow-col justify-start w-full">
        {/* <h1 className="text-6xl">
          {date.toLocaleString("es", { day: "numeric" })}
        </h1>
        <br></br>
        {date.toLocaleString("es", { weekday: "short" })}
        {date.toLocaleString("es", { month: "short" })}
        {date.toLocaleString("es", { year: "numeric" })} */}
      </div>
      <form>
        <input
          type="text"
          name="taskText"
          className="rounded-lg bg-slate-300 px-2"
          placeholder="Agregar Tarea..."
        ></input>
        <button className="bg-cyan-500 hover:bg-cyan-600 rounded-full">
          +
        </button>
        <Button>ordenar</Button>
      </form>
      <Task name="Pasear a la Blacky"></Task>
    </div>
  );
}

export default ListTask;
