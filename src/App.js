import ListTask from "./components/ListTask";
import Narrower from "./components/Narrower";
function App() {
  return (
    <Narrower className="flex justify-center items-center h-screen">
      <ListTask />
    </Narrower>
  );
}

export default App;
