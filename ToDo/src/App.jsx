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
      status: "Pending",
    },
  ];

  const [todos, setTodos] = useState(todoList);

  function addTodo(task) {
    const newTodo = {
      id: Date.now(),
      desc: task,
      status: "Pending",
    };

    setTodos([...todos, newTodo]);
  }

  function deleteTodo(id) {
    const updatedTodos = todos.filter((item) => item.id !== id);
    setTodos(updatedTodos);
  }

  function markCompleted(id) {
    const updatedTodos = todos.map((item) => {
      if (item.id === id) {
        return { ...item, status: "Done" };
      }
      return item;
    });

    setTodos(updatedTodos);
  }

  function editTodo(id, newDesc) {
    const updatedTodos = todos.map((item) => {
      if (item.id === id) {
        return { ...item, desc: newDesc };
      }
      return item;
    });

    setTodos(updatedTodos);
  }

  return (
    <>
      <Header />
      <ToDoList
        todos={todos}
        addTodo={addTodo}
        deleteTodo={deleteTodo}
        markCompleted={markCompleted}
        editTodo={editTodo}
      />
    </>
  );
}

export default App;
