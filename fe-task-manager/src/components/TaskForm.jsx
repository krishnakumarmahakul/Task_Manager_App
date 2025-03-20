import React, { useState } from "react";
import axios from "axios";

const TaskForm = ({ onTaskAdded }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/tasks", { title, description });
    setTitle("");
    setDescription("");
    onTaskAdded();
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow rounded">
      <input
        type="text"
        placeholder="Task Title"
        className="border p-2 w-full mb-2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        className="border p-2 w-full mb-2"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Add Task</button>
    </form>
  );
};

export default TaskForm;
