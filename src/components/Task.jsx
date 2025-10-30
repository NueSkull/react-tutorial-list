function Task({ task, handleDelete }) {
  return (
    <li>
      {task}
      <button onClick={() => handleDelete(task)}>Delete</button>
    </li>
  );
}

export default Task;
