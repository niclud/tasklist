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
  const sortTasks = () => {
    let doneTasks = [];
    let doitTasks = [];
    tasks.forEach((t) => (t.state ? doitTasks.push(t) : doneTasks.push(t)));
    setTasks(() => [...doitTasks, ...doneTasks]);
  };
  return (
    <div className="bg-white max-w-[450px] w-full m-[25px] p-[25px]  rounded-lg">
      <CurrentDate />
      <FormTask sortTasks={sortTasks} addItem={addItem} />
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
