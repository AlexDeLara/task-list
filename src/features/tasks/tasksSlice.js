import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: '1',
    title: "Task 1",
    description: "Task 1 description",
    completed: false,
  },
  {
    id: '2',
    title: "Task 2",
    description: "Task 2 description",
    completed: false,
  },
];

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    deleteTask: (state, action) => {
      const taskIndex = state.find((task) => task.id === action.payload);
      if (taskIndex) state.splice(state.indexOf(taskIndex), 1);
    },
    editTask: (state, action) => {
      const { id, title, description } = action.payload;
      const task = state.find((statteTask) => statteTask.id === id);
      if (task) {
        task.title = title;
        task.description = description;
      }
    },
  },
});

export const { addTask, deleteTask, editTask } = tasksSlice.actions;
export default tasksSlice.reducer;
