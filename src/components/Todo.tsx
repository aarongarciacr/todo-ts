import { type Todo as TodoType } from "../types";

interface Props extends TodoType {
  deleteTodo: (id: string) => void;
}

export const Todo: React.FC<Props> = ({ id, title, completed, deleteTodo }) => {
  return (
    <div className="view">
      <input
        className="toggle"
        checked={completed}
        type="checkbox"
        onChange={() => {}}
      ></input>
      <label>{title}</label>
      <button className="destroy" onClick={() => deleteTodo(id)}></button>
    </div>
  );
};
