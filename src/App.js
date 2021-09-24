import React from "react";
import logo from "./logo.svg";

import "./App.css";
import { useSelector } from "react-redux";
import TodoList from "./Pages/TodoList/TodoList";

function App() {
  const { todo } = useSelector((state) => state.data);
  console.log(todo);
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
