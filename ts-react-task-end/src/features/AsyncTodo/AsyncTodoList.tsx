import TodoItem from "components/TodoItem";
import { Todo } from "types";
import { useAppDispatch } from "redux-hooks";
// import { removeTodo, toggleTodo } from "./todoSlice";
import { useSelector } from "react-redux";
import { selectAsyncTodo } from "./AsuncTodoSelector";
import { useEffect } from "react";
import { fetchAllTodos, removeTodo, toggleTodo } from "./TodoAsyncThunk";

const AsyncTodoList = () => {
  const { list } = useSelector(selectAsyncTodo);
  const dispatch = useAppDispatch();

  const handleRemoveTodo = (id: Todo["id"]) => {
    dispatch(removeTodo(id));
  };

  const handleToggleTodo = (id: Todo["id"]) => {
    dispatch(toggleTodo(id));
  };

  useEffect(() => {
    dispatch(fetchAllTodos());
  }, []);

  return (
    <ul>
      {list.map((todo) => (
        <TodoItem
          key={todo.id}
          removeTodo={handleRemoveTodo}
          toggleTodo={handleToggleTodo}
          {...todo}
        />
      ))}
    </ul>
  );
};

export default AsyncTodoList;
