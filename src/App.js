import React from "react";

import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import FilterTasks from "./components/FilterTasks";

import "./App.css";

const App = () => {
  return (
    <div>
      <AddTodo />
      <FilterTasks />
      <TodoList />
    </div>
  );
};

export default App;
