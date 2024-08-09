import { rootState } from "store";

export const selectAllTodos = (state: rootState) => state.todos;
