import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ToDoItem from "./components/ToDoItem";
import ToDoList from "./components/ToDoList";

function App() {
  const [todos, setTodos] = useState();
  return (
    <>
      <Header />

      <ToDoList />
    </>
  );
}

export default App;
