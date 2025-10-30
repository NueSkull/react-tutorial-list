import { useState } from "react";

export default function Input({ addToDoTask }) {
  const [addTask, setAddTask] = useState("");

  const handleChange = (e) => {
    setAddTask(e.target.value);
  };
  return (
    <>
      <label htmlFor="addTaskInput">Add task to list: </label>
      <input
        type="text"
        id="addTaskInput"
        value={addTask}
        onChange={handleChange}
      />
      <button
        onClick={() => {
          addToDoTask(addTask);
          setAddTask("");
        }}
      >
        Submit
      </button>
    </>
  );
}
