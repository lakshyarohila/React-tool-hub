import React from "react";
import { useState } from "react";
const Todo = () => {
  const [tasks, settasks] = useState([]);
  const [input, setinput] = useState("");

  const addtask = () => {
    if (input.trim() !== "") {
      settasks([...tasks, { text: input, completed: false }]);
      setinput("");
    }
  };

  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    settasks(updated);
  };

  const deleteTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    settasks(updated);
  };
  return (
    <div className="min-h-screen  flex flex-col items-center justify-center p-4">
      <h1 className="text-white text-3xl font-bold mb-4">To-Do List</h1>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          className="px-4 py-2 bg-white rounded-2xl border w-64"
          value={input}
          onChange={(e) => setinput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addtask()}
        />
        <button
          onClick={addtask}
          className="bg-blue-400 text-white px-4 py-2 rounded-2xl hover:bg-blue-800"
        >
          Add
        </button>
      </div>
      <ul className="w-full max-w-md">
        {tasks.map((task, index) => (
          <li
            key={index}
            className={`flex justify-between items-center bg-white p-3 rounded shadow mb-2 ${
              task.completed ? "line-through text-yellow-300" : ""
            }`}
          >
            <span
              onClick={() => toggleTask(index)}
              className="cursor-pointer flex-1"
            >
              {task.text}{" "}
            </span>
            <button
              onClick={() => deleteTask(index)}
              className="text-red-500 hover:text-red-800 ml-4"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
