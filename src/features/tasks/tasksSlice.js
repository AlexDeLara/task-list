import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: '1',
    title: "Call Mom",
    description: "Weekly family call and make plans for next Friday evening",
    completed: false,
  },
  {
    id: '2',
    title: "Buy monitor",
    description: "Buy a new monitor to improve work productivity (Saturn shop has some good deals coming next week)",
    completed: false,
  },
  {
    id: '3',
    title: "Fix car",
    description: "Send car to the garage and fix oil leaks",
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
