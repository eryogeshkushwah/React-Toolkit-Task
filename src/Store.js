import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./Reducers/Reducer";

export const store = configureStore({
  reducer: {
    task: taskReducer,
  },
});
