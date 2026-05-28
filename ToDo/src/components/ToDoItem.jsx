function ToDoItem({ item }) {
  return (
    <div>
      <li>{item.id}</li>
      <li>{item.desc}</li>
      <li>{item.status}</li>
    </div>
  );
}

export default ToDoItem;
