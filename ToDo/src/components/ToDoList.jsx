import ToDoItem from "./ToDoItem";

const ToDoList = () => {
  return (
    <div>
      <input type="text" />
      <button>Add</button>
      <div>
        <ToDoItem />
      </div>
    </div>
  );
};

export default ToDoList;
