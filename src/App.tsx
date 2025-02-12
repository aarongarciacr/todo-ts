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
  return (
    <div className="todoapp">
      <Todos todos={todos} />;
    </div>
  );
};

export default App;
