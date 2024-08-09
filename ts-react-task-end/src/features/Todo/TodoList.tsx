import TodoItem from "components/TodoItem";
import { Todo } from "types";
import { useAppDispatch } from "redux-hooks";
import { removeTodo, toggleTodo } from "./todoSlice";
import { selectAllTodos } from "./TodoSelectors";
import { useSelector } from "react-redux";

const TodoList = () => {
  const list = useSelector(selectAllTodos);
  const dispatch = useAppDispatch();

  const handleRemoveTodo = (id: Todo["id"]) => {
    dispatch(removeTodo(id));
  };

  const handleToggleTodo = (id: Todo["id"]) => {
    dispatch(toggleTodo(id));
  };

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

export default TodoList;
