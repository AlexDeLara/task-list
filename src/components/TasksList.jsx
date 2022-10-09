import { useSelector } from "react-redux";

function TasksList() {
  const tasksState = useSelector((state) => state.tasks);

  return (
    <div>
      {tasksState.map((task) => (
        <div key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  );
}

export default TasksList;
