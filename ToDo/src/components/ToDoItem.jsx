import { useState } from "react";

function ToDoItem({ item, deleteTodo, markCompleted, editTodo }) {
  const [editText, setEditText] = useState(item.desc);

  function handleEdit() {
    if (editText.trim() === "") {
      return;
    }

    editTodo(item.id, editText);
  }

  return (
    <div className="todo-item">
      <h3>{item.desc}</h3>

      <p className={item.status === "Done" ? "status-done" : "status-pending"}>
        Status : {item.status}
      </p>

      <input
        type="text"
        value={editText}
        onChange={(e) => setEditText(e.target.value)}
      />

      <div>
        <button className="edit-btn" onClick={handleEdit}>
          Edit
        </button>

        <button className="complete-btn" onClick={() => markCompleted(item.id)}>
          Complete
        </button>

        <button className="delete-btn" onClick={() => deleteTodo(item.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default ToDoItem;
