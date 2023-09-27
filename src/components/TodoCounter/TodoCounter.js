import "./TodoCounter.css";
function TodoCounter({ total, completed }) {
  const title = () => {
    if (total === completed) {
      return (
        <h1 className="title">
          {`Felicidades! Has terminado todos tus ToDos ✨`}
        </h1>
      );
    } else
      return (
        <h1 className="title">
          {`Has completado `} <span>{completed}</span> {`de `}
          <span>{total}</span> {` TODOS`}
        </h1>
      );
  };
  return title();
}
export { TodoCounter };
