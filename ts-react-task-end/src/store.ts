import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todoReducer from "features/Todo/todoSlice";
import asyncTodoReducer from "features/AsyncTodo/AsyncTodoSlice";

const rootReducer = combineReducers({
  todos: todoReducer,
  asyncTodos: asyncTodoReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type rootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
