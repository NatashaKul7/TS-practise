import { useAppDispatch } from "redux-hooks";

import AddNewItem from "components/NewItem";
import { createTodo } from "./TodoAsyncThunk";

const NewTodo = () => {
  const dispatch = useAppDispatch();

  const handleNewTodo = (title: string) => {
    dispatch(createTodo(title));
  };

  return (
    <AddNewItem
      placeholder="add new todo"
      handleClick={handleNewTodo}
    ></AddNewItem>
  );
};

export default NewTodo;
