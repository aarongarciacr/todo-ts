import { type Todo as TodoType } from "../types";

type Props = TodoType;

export const Todo: React.FC<Props> = ({ title, completed }) => {
  return (
    <div className="view">
      <input
        className="toggle"
        checked={completed}
        type="checkbox"
        onChange={() => {}}
      ></input>
      <label>{title}</label>
      <button className="destroy" onClick={() => {}}></button>
    </div>
  );
};
