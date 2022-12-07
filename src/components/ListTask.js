import { useState } from "react";
import CurrentDate from "./Date";
import FormTask from "./FormTask";
import Task from "./Task";
function ListTask() {
  const [tasks, setTasks] = useState([]);
  const addItem = (keyword) => {
    setTasks((lt) => [
      ...lt,
      {
        name: keyword,
        state: true,
        date: Date.now(),
      },
    ]);
  };
  const markTask = (id) => {
    tasks[id].state = !tasks[id].state;
    setTasks(() => [...tasks]);
  };
  return (
    <div className="bg-white justify-center m-0 p-2  rounded-lg">
      <div className="grid grid-flow-col justify-start w-full">
        <CurrentDate />
      </div>
      <FormTask addItem={addItem} />
      {tasks.map((c, id) => (
        <Task
          state={c.state}
          markTask={() => markTask(id)}
          name={c.name}
        ></Task>
      ))}
    </div>
  );
}

export default ListTask;
