import { useState } from "react";
import { Todos } from "./components/Todos";

const mockTodos = [
  {
    id: "1",
    title: "Create Todo project with Typescript",
    completed: true,
  },
  {
    id: "2",
    title: "Learn Next.js",
    completed: false,
  },
  {
    id: "3",
    title: "Practice DSN&A",
    completed: false,
  },
];

const App = () => {
  const [todos, setTodos] = useState(mockTodos);

  const handleRemove = (id: string) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div className="todoapp">
      <Todos todos={todos} deleteTodo={handleRemove} />
    </div>
  );
};

export default App;
