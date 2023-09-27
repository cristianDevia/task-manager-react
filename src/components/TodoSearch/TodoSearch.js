import React from "react";
import "./TodoSearch.css";
function TodoSearch({ searchValue, setSearchValue }) {
  return (
    <input
      className="searchTodo"
      placeholder="write your task"
      value={searchValue}
      onChange={(event) => setSearchValue(event.target.value)}
    />
  );
}
export { TodoSearch };
