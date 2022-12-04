import CurrentDate from "./Date";
import FormTask from "./FormTask";
import Task from "./Task";
function ListTask() {
  return (
    <div className="bg-white justify-center m-0 p-2  rounded-lg">
      <div className="grid grid-flow-col justify-start w-full">
        <CurrentDate />
      </div>
      <FormTask />
      <Task name="Pasear a la Blacky"></Task>
    </div>
  );
}

export default ListTask;
