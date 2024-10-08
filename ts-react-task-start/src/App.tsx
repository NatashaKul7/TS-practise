import { useState } from "react";

import { Todo } from "./types";
import NewTodoForm from "./components/NewTodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: new Date().toString(),
      title: text,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
  };

  const toggleTodo = (id: Todo["id"]) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) {
          return todo;
        }
        return {
          ...todo,
          completed: !todo.completed,
        };
      })
    );
  };

  const removeTodo = (id: Todo["id"]) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <NewTodoForm handleClick={addTodo} />
      <TodoList removeTodo={removeTodo} toggleTodo={toggleTodo} list={todos} />
    </div>
  );
}

export default App;
