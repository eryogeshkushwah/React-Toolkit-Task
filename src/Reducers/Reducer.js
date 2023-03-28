import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const taskAdapter = createEntityAdapter({
  sortComparer: (x, y) => {
    console.log(x.completed === y.completed ? 0 : x.completed ? 1 : -1);
    console.log("x", x.completed);
    console.log("y", y.completed);
    return x.completed === y.completed ? 0 : x.completed ? 1 : -1;
  },
});
console.log(taskAdapter);

export const taskSelector = taskAdapter.getSelectors((state) => state.task);
console.log(taskSelector);

export const taskSlice = createSlice({
  name: "task",
  initialState: taskAdapter.getInitialState(),
  reducers: {
    addTask: taskAdapter.addOne,
    deleteTask: taskAdapter.removeOne,
    markAsCompleted: (state, action) => {
      const { id, ...rest } = action.payload;
      const update_change = {
        id: id,
        changes: {
          ...rest,
          completed: !rest.completed,
        },
      };

      taskAdapter.updateOne(state, update_change);
    },
  },
});

export const { addTask, deleteTask, markAsCompleted } = taskSlice.actions;
export default taskSlice.reducer;
