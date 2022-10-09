import { useDispatch, useSelector } from "react-redux";
import TaskForm from "./components/TaskForm";
import TasksList from "./components/TasksList";

function App() {
  const tasksState = useSelector((state) => state.tasks);
  console.log(tasksState);

  return (
    <>
      <TaskForm />
      <TasksList />
      <h1>Hello World!</h1>
    </>
  );
}

export default App;
