import {
  type Todo as TodoType,
  type TodoId,
  type ListOfTodos,
} from "../types/types";
import { Todo } from "./Todo";

interface Props {
  todos: ListOfTodos;
  deleteTodo: (id: TodoId) => void;
  onToggleCompleteTodo: ({
    id,
    completed,
  }: Pick<TodoType, "id" | "completed">) => void;
}

export const Todos: React.FC<Props> = ({
  todos,
  deleteTodo,
  onToggleCompleteTodo,
}) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className={`${todo.completed ? "completed" : ""}`}>
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            deleteTodo={deleteTodo}
            onToggleCompleteTodo={onToggleCompleteTodo}
          />
        </li>
      ))}
    </ul>
  );
};
