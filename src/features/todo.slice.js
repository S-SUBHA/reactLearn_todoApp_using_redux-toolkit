import { createSlice, nanoid } from "@reduxjs/toolkit";
import { getFromLocalStorage, setToLocalStorage } from "./localStorage";

const initialState = {
  todos: getFromLocalStorage() ?? [
    {
      id: nanoid(),
      task: "What to do!",
      completed: false,
    },
  ],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      // console.log(action.payload);
      // console.log(state);
      const todo = {
        id: nanoid(),
        task: action.payload,
        completed: false,
      };
      state.todos.push(todo);
      setToLocalStorage("todos", state.todos);
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      setToLocalStorage("todos", state.todos);
    },

    updateTodo: (state, action) => {
      // console.log(action.payload);

      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id ? action.payload.todo : todo
      );
      setToLocalStorage("todos", state.todos);
    },

    toggleCompleted: (state, action) => {
      // state.todos = state.todos.map((todo) =>
      //   todo.id === action.payload
      //     ? {...todo, completed: !todo.completed}
      //     : todo
      // );

      const todo = state.todos.find((todo) => todo.id === action.payload);
      todo.completed = !todo.completed;
      setToLocalStorage("todos", state.todos);
    },

    toggleTodoUpdateRequest: (state) => {
      state.todoUpdateRequest = !state.todoUpdateRequest;
    },
  },
});

export const { addTodo, removeTodo, updateTodo, toggleCompleted } =
  todoSlice.actions;

export default todoSlice.reducer;
