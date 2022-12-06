import ListTask from "./components/ListTask";
import TasksContext from "./context/TasksContext";
let tasks = [];
function App() {
  return (
    <TasksContext.Provider value={tasks}>
      <div className="h-screen w-screen flex justify-center items-center">
        <ListTask tasks={tasks} />
      </div>
    </TasksContext.Provider>
  );
}

export default App;
