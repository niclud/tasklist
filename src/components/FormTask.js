import Button from "./Button";
function FormTask() {
  const task = document.getElementById("inputTask");
  const buttonTask = document.getElementById("buttonTask");
  let tasks = [];
  // pensar de que forma puedo ordenar los distintos componentes para que me devuelvan el target del form y con eso crearun nuevo componente Task
  return (
    <form>
      <input
        id="inputTask"
        type="text"
        name="taskText"
        className="rounded-lg bg-slate-300 px-2"
        placeholder="Agregar Tarea..."
      ></input>
      <button
        id="buttonTask"
        className="bg-cyan-500 hover:bg-cyan-600 rounded-full"
      >
        +
      </button>
      <Button>ordenar</Button>
    </form>
  );
}
export default FormTask;
