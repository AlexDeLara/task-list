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
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        type="text"
        placeholder="title"
        onChange={handleChange}
        value={task.title}
      ></input>
      <textarea
        name="description"
        placeholder="description"
        onChange={handleChange}
        value={task.description}
      ></textarea>
      <button>Save</button>
    </form>
  );
}

export default TaskForm;
