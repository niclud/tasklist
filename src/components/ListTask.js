import { useState } from "react";
import CurrentDate from "./Date";
import FormTask from "./FormTask";
import DeleteModal from "./modals/DeleteModal";
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

  const [stateModal1, changeStateModal1] = useState(false);
  const [currentId, setCurrentId] = useState();
  const changeState = (id) => {
    console.log(id);
    changeStateModal1(!stateModal1);
    setCurrentId(id);
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

  const deleteTask = (id) => {
    console.log(id);
    tasks.splice(id, 1);
    setTasks(() => [...tasks]);
    changeState();
  };
  return (
    <div className="bg-white w-[300px] md:w-[450px] m-[25px] p-[25px]  rounded-lg">
      <CurrentDate />
      <FormTask sortTasks={sortTasks} addItem={addItem} />
      {tasks.map((c, id) => (
        <Task
          state={c.state}
          modalDeleteTask={() => changeState(id)}
          markTask={() => markTask(id)}
          name={c.name}
        ></Task>
      ))}
      <DeleteModal
        deleteTasks={() => deleteTask(currentId)}
        state={stateModal1}
        changeState={changeState}
        task={tasks[currentId]}
      ></DeleteModal>
    </div>
  );
}

export default ListTask;
