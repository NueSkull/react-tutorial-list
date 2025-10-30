import "./App.css";
import Task from "./components/Task.jsx";
import Input from "./components/Input.jsx";
import { useState } from "react";

function App() {
  const [toDos, setToDos] = useState([
    "Wake up",
    "Grab a brush",
    "Put a little make-up",
    "Hide the scars to fade away the shake-up",
    "Why'd you leave the keys upon the table?",
  ]);

  const handleDelete = (deletedTask) => {
    setToDos((currentToDos) => {
      return currentToDos.filter((task) => {
        return task !== deletedTask;
      });
    });
  };

  const addToDoTask = (newTask) => {
    setToDos((currentToDos) => {
      return [...currentToDos, newTask];
    });
  };

  return (
    <>
      <h1>My To-Do List</h1>
      <p>
        Welcome to the to-do list! Make note of your daily tasks, and tick them
        off as you go!
      </p>
      <p>
        {" "}
        An inline javascript is wrapped inside curly braces, so {"{"}2 + 2{"}"}{" "}
        is {2 + 2}
      </p>
      <br />

      <Input addToDoTask={addToDoTask} />
      <ul>
        {toDos.map((task) => {
          return <Task key={task} task={task} handleDelete={handleDelete} />;
        })}
      </ul>
    </>
  );
}

export default App;
