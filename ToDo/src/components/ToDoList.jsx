import ToDoItem from "./ToDoItem";

function ToDoList({ todos }) {
  return (
    <div>
      <input type="text" />
      <button>Add</button>
      <div>
        {todos.map((item) => {
          return <ToDoItem item={item} />;
        })}
      </div>
      <div></div>
    </div>
  );
}

export default ToDoList;
