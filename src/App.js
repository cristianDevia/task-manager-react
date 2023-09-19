import React, { useState } from "react";
import "./App.css";
import { CreateTodoButton } from "./components/CreateTodoButton/CreateTodoButton";
import { TodoCounter } from "./components/TodoCounter/TodoCounter";
import { TodoItem } from "./components/TodoItem/TodoItem";
import { TodoList } from "./components/TodoList/TodoList";
import { TodoSearch } from "./components/TodoSearch/TodoSearch";

function App() {
  const defaultTodos = [
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      completed: false,
    },
    {
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ipsam placeat quae incidunt. Cum quaerat quidem tempore facilis doloremque delectus temporibus alias, nam perferendis aperiam. Provident consectetur amet vero saepe?
      Quo nemo aliquid nihil aspernatur? Dicta officia voluptatibus nam nobis quam velit dolorem odit, laudantium consequuntur deserunt in similique. Odio veritatis eligendi fuga quam beatae. Maiores quos fugit quo omnis!
      Hic obcaecati odit ipsum officiis dolore cupiditate laudantium quisquam debitis tempora neque, fugit voluptatum, soluta ullam id nobis omnis culpa quibusdam eaque aut nisi est commodi rerum? Itaque, ducimus deleniti!
      Recusandae magnam sunt iste rem architecto, at, nihil dolorum porro aliquid et enim, qui repellendus praesentium dolorem est explicabo quis? Nobis quia corrupti nesciunt rerum est odit iure totam excepturi.
      Alias ullam eos cupiditate consequatur ipsam iusto optio vero voluptate, provident ad id maiores obcaecati nemo! Perspiciatis dolore, ex tenetur saepe ipsum odio praesentium eum voluptas rerum non. Magnam, nam!`,
      completed: true,
    },
    { text: "Task 3", completed: false },
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      completed: true,
    },
    { text: "Task 5", completed: false },
    {
      text: "Task 6",
      completed: true,
    },
  ];
  const [todos, setTodos] = useState(defaultTodos);
  const [searchValue, setSearchValue] = useState("");

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;
  const searchedTodos = todos.filter((todo) =>
    todo.text.toUpperCase().includes(searchValue.toUpperCase())
  );

  return (
    <>
      <div className="container">
        <TodoCounter completed={completedTodos} total={totalTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
        <TodoList>
          {searchedTodos.map((todo, index) => (
            <TodoItem
              key={index}
              taskText={todo.text}
              completed={todo.completed}
            />
          ))}
        </TodoList>
        <CreateTodoButton />
      </div>
    </>
  );
}
export default App;
