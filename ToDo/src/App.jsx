import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";

function App() {
  const [todos, setTodos] = useState([]);
  setTodos();
  const Todo = [
    {
      id: 1,
      desc: "Create a Todo App",
      status: "Done",
    },
  ];

  return (
    <>
      <Header />
      <ToDoList todos={todos} />
    </>
  );
}

export default App;
