import { useContext, useState, useEffect } from "react";
import TasksContext from "../context/TasksContext";
import CurrentDate from "./Date";
import FormTask from "./FormTask";
import Task from "./Task";
function ListTask({ tasks }) {
  const [context, setContext] = useState(tasks);
  useEffect(() => {
    setContext(tasks);
  }, [tasks]);
  return (
    <div className="bg-white justify-center m-0 p-2  rounded-lg">
      <div className="grid grid-flow-col justify-start w-full">
        <CurrentDate />
      </div>
      <FormTask />
      {context.map((c) => (
        <Task name={c}></Task>
      ))}
    </div>
  );
}

export default ListTask;
