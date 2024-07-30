import { Todo } from "../types";
import TodoItem from "./TodoItem";

interface TodoListProps {
  list: Todo[];
  removeTodo: (id: Todo["id"]) => void;
  toggleTodo: (id: Todo["id"]) => void;
}

const TodoList = ({ list, removeTodo, toggleTodo }: TodoListProps) => {
  return (
    <ul>
      {list.map((todo) => (
        <TodoItem
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
          key={todo.id}
          {...todo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
