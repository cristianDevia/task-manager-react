import "./App.css";
import { TodoCounter } from "./components/TodoCounter";
import { TodoItem } from "./components/TodoItem";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { CreateTodoButton } from "./components/CreateTodoButton";
function App() {
  return (
    <div className="App">
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </TodoList>
      <CreateTodoButton />
    </div>
  );
}
export default App;
