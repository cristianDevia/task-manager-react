import "./App.css";
import { TodoCounter } from "./components/TodoCounter";
import { TodoItem } from "./components/TodoItem";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { CreateTodoButton } from "./components/CreateTodoButton";
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
