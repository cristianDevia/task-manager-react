import "./TodoItem.css";
import { CheckIcon } from "../../assets/CheckIcon";
import { RemoveIcon } from "../../assets/RemoveIcon";

function TodoItem({
  index,
  taskText,
  completed,
  setRemoveTodo,
  setChangeTodoCompleted,
}) {
  return (
    <li className="todoItemList">
      <span
        onClick={() => {
          !completed && setChangeTodoCompleted(index);
        }}
      >
        <CheckIcon completed={completed} />
      </span>
      <p
        className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}
      >{`${taskText}`}</p>
      <span className="removeItem" onClick={() => setRemoveTodo(index)}>
        <RemoveIcon />
      </span>
    </li>
  );
}
export { TodoItem };
