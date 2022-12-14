import { useState } from "react";
import CurrentDate from "./Date";
import FormTask from "./FormTask";
import DeleteModal from "./modals/DeleteModal";
import InfoModal from "./modals/InfoModal";
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
        description: "",
      },
    ]);
  };

  const [stateModal1, changeStateModal1] = useState(false);
  const [stateModal2, changeStateModal2] = useState(false);
  const [currentId, setCurrentId] = useState();
  const changeState = (id) => {
    console.log(id);
    changeStateModal1(!stateModal1);
    setCurrentId(id);
  };
  const changeState2 = (id) => {
    changeStateModal2(!stateModal2);
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
  console.log(tasks);
  return (
    <div className="bg-white w-[300px] md:w-[450px] m-[25px] p-[25px]  rounded-lg">
      <CurrentDate />
      <FormTask sortTasks={sortTasks} addItem={addItem} />
      {tasks.map((c, id) => (
        <Task
          state={c.state}
          modalDeleteTask={() => changeState(id)}
          modalInfoTask={() => changeState2(id)}
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
      <InfoModal
        state={stateModal2}
        changeState={changeState2}
        task={tasks[currentId]}
      ></InfoModal>
    </div>
  );
}

export default ListTask;
