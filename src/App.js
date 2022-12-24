import ListTask from "./components/ListTask";
import Narrower from "./components/Narrower";
function App() {
  return (
    <Narrower className="grid place-items-center min-h-screen">
      <ListTask />
    </Narrower>
  );
}

export default App;
