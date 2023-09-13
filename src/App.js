import { CreateTodoButton } from "./components/CreateTodoButton/CreateTodoButton";
import { TodoCounter } from "./components/TodoCounter/TodoCounter";
import { TodoItem } from "./components/TodoItem/TodoItem";
import { TodoList } from "./components/TodoList/TodoList";
import { TodoSearch } from "./components/TodoSearch/TodoSearch";

function App() {
  const defaultTodos = [
    { text: "Task1", completed: false },
    { text: "Task2", completed: true },
    { text: "Task3", completed: false },
    { text: "Task4", completed: true },
    { text: "Task5", completed: false },
  ];
  return (
    <>
      <TodoCounter completed={16} total={25} />
      <TodoSearch />
      <TodoList>
        {defaultTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            taskText={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}
export default App;
