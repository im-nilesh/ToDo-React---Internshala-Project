import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";

function App() {
  const todoList = [
    {
      id: 1,
      desc: "Create a Todo App",
      status: "Done",
    },
    {
      id: 2,
      desc: "Hello",
      status: "Done",
    },
  ];
  const [todos, setTodos] = useState(todoList);

  return (
    <>
      <Header />
      <ToDoList todos={todos} />
    </>
  );
}

export default App;
