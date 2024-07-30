import React from "react";
import { Todo } from "../types";

interface TodoItemProps extends Todo {
  style?: React.CSSProperties;
  removeTodo: (id: Todo["id"]) => void;
  toggleTodo: (id: Todo["id"]) => void;
}

const TodoItem = ({
  id,
  title,
  completed,
  style = {},
  removeTodo,
  toggleTodo,
}: TodoItemProps) => {
  return (
    <li style={style}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleTodo(id)}
      />
      <span>{title}</span>
      <span onClick={() => removeTodo(id)}>&times;</span>
    </li>
  );
};

export default TodoItem;
