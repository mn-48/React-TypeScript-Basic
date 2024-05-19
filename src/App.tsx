import { useState } from "react";
import Todos from "./components/Todos";
import Todo from "./models/todo";
import NewForm from "./components/NewForm";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandeler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  return (
    <div>
      <NewForm onAddTodo={addTodoHandeler} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
