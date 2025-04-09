function ToDoItem({id, onChecked, text}) {
  return (
    <div
      onClick={() => {
        onChecked(id);
      }}
    >
      <li>{text}</li>
    </div>
  );
}

export default ToDoItem;