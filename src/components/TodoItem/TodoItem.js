import "./TodoItem.css";
import { CheckIcon } from "../../assets/CheckIcon";
import { TrashIcon } from "../../assets/TrashIcon";
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
        <TrashIcon />
      </span>
    </li>
  );
}
export { TodoItem };
