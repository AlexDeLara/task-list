import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../features/tasks/tasksSlice";
import { Link } from "react-router-dom";

function TasksList() {
  const tasksState = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div className="w-4/6">
      <header className="flex items-start gap-4 mb-3 content-center">
        <h1 className="font-bold text-2xl">Tasks: {tasksState.length}</h1>
        <Link to="/create-task" className="bg-indigo-600 px-2 py-1 rounded text-sm">Create Task</Link>
      </header>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
        {tasksState.map((task) => (
          <div
            key={task.id}
            className="bg-neutral-900 p-4 rounded-md flex flex-col"
          >
            <div className="flex justify-between">
              <div>
                <h3 className="mb-4 font-bold text-lg">{task.title}</h3>
              </div>
              <div className="flex gap-x-2">
                <Link
                  to={`/edit-task/${task.id}`}
                  className="bg-gray-500 px-2 py-1 rounded text-sm h-fit"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(task.id)}
                  className="bg-red-500 px-2 py-1 rounded text-sm h-fit"
                >
                  Delete
                </button>
              </div>
            </div>
            <p>{task.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TasksList;
