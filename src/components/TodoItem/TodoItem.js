function TodoItem({ taskText, completed }) {
  return (
    <li>
      <span>V</span>
      <p>{`${taskText}`}</p>
      <span>X</span>
    </li>
  );
}
export { TodoItem };
