import "./CreateTodoButton.css";
import add_button from "../../assets/add_button.svg";
function CreateTodoButton() {
  return (
    <div>
      <button id="addTask">
        <img src={add_button} alt="" />
      </button>
    </div>
  );
}
export { CreateTodoButton };
