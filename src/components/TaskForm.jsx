import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask } from "../features/tasks/tasksSlice";
import { v4 as uuid } from "uuid";
import { useNavigate, useParams } from "react-router-dom";

function TaskForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const tasks = useSelector((state) => state.tasks);

  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (params.id) {
      console.log(params.id);
      dispatch(editTask(task));
    } else {
      dispatch(addTask({ ...task, id: uuid() }));
    }
    navigate("/");
  };

  useEffect(() => {
    if (params.id) {
      const foundTask = tasks.find((auxTask) => auxTask.id === params.id);
      setTask({...foundTask});
     }
  }, [params.id, tasks]);

  return (
    <form onSubmit={handleSubmit} className="bg-neutral-900 p-4 flex flex-col gap-2">
      <label htmlFor="title" className="font-bold text-md">Task</label>
      <input
        name="title"
        type="text"
        placeholder="Task title"
        onChange={handleChange}
        value={task.title}
        className="rounded text-black p-2"
      ></input>
      <label htmlFor="description" className="font-bold text-md mt-4">Description</label>
      <textarea
        name="description"
        placeholder="Task description"
        onChange={handleChange}
        value={task.description}
        className="rounded text-black p-2 overflow-scroll"
      ></textarea>
      <button className="bg-indigo-600 rounded px-2 py-1 mt-4 hover:bg-indigo-500">Save</button>
    </form>
  );
}

export default TaskForm;
