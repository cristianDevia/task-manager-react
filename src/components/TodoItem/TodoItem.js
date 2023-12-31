import "./TodoItem.css";
import { CheckIcon } from "../../assets/CheckIcon";
import { RemoveIcon } from "../../assets/RemoveIcon";

function TodoItem({ taskText, completed, completeTodo, deleteTodos }) {
  return (
    <li className="todoItemList">
      <span onClick={completeTodo}>
        <CheckIcon completed={completed} />
      </span>
      <p
        className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}
      >{`${taskText}`}</p>
      <span className="removeItem" onClick={deleteTodos}>
        <RemoveIcon />
      </span>
    </li>
  );
}
export { TodoItem };
