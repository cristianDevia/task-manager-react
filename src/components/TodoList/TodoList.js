import "./TodoList.css";
function TodoList({ children }) {
  return <ul className="listItem">{children}</ul>;
}
export { TodoList };
