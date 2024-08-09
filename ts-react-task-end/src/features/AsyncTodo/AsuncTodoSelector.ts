import { rootState } from "store";

export const selectAsyncTodo = (state: rootState) => state.asyncTodos;
