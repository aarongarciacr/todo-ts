import { type TodoId, type Todo as TodoType } from "../types";

interface Props extends TodoType {
  deleteTodo: (id: TodoId) => void;
  onToggleCompleteTodo: ({
    id,
    completed,
  }: Pick<TodoType, "id" | "completed">) => void;
}

export const Todo: React.FC<Props> = ({
  id,
  title,
  completed,
  deleteTodo,
  onToggleCompleteTodo,
}) => {
  return (
    <div className="view">
      <input
        className="toggle"
        checked={completed}
        type="checkbox"
        onChange={() => {
          onToggleCompleteTodo({ id, completed });
        }}
      ></input>
      <label>{title}</label>
      <button className="destroy" onClick={() => deleteTodo(id)}></button>
    </div>
  );
};
