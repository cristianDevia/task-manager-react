import "./TodoItem.css";
import { CheckIcon } from "../../assets/CheckIcon";
import { RemoveIcon } from "../../assets/RemoveIcon";
function TodoItem({ taskText, completed }) {
  return (
    <li>
      <span>
        <CheckIcon completed={completed} />
      </span>
      <p
        className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}
      >{`${taskText}`}</p>
      <span className="removeItem">
        <RemoveIcon />
      </span>
    </li>
  );
}
export { TodoItem };
