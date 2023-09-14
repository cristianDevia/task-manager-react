import "./TodoItem.css";
import check_icon from "../../assets/check_icon.svg";
import trash_x from "../../assets/trash_x.svg";
function TodoItem({ taskText, completed }) {
  return (
    <li>
      <span>
        <img src={check_icon} alt="check" />
      </span>
      <p>{`${taskText}`}</p>
      <span className="removeItem">
        <img src={trash_x} alt="remove" />
      </span>
    </li>
  );
}
export { TodoItem };
