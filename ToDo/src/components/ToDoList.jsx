import { useState } from "react";
import ToDoItem from "./ToDoItem";

function ToDoList({ todos, addTodo, deleteTodo, markCompleted, editTodo }) {
  const [task, setTask] = useState("");

  function handleAdd() {
    if (task.trim() === "") {
      return;
    }

    addTodo(task);
    setTask("");
  }

  return (
    <div className="container">
      <div className="input-section">
        <input
          type="text"
          placeholder="Enter a Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button className="add-btn" onClick={handleAdd}>
          Add Task
        </button>
      </div>

      <div>
        {todos.map((item) => {
          return (
            <ToDoItem
              key={item.id}
              item={item}
              deleteTodo={deleteTodo}
              markCompleted={markCompleted}
              editTodo={editTodo}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ToDoList;
