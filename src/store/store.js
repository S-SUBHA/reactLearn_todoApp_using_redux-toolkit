import { configureStore } from "@reduxjs/toolkit";
import todoSliceReducer from "../features/todo.slice.js";

export const store = configureStore({
  reducer: todoSliceReducer,
});
