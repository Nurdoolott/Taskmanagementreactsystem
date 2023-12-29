// src/components/AddTask.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import "./Addtask.css";

const AddTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleAddTask = async () => {
    try {
      const userId = localStorage.getItem("userId");
      await api.post("/tasks", { title, description, userId });
      navigate("/task-page");
    } catch (error) {
      console.error("Error adding task:", error.message);
    }
  };

  return (
    <div className="body">
    <div className="adding">
      <h2 className="h2">Add ask</h2>
      <label className="title">Title:</label>
      <input className="inputtitle"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label className="description">Description:</label>
      <textarea className="areadescription"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button className="addtask" onClick={handleAddTask}>Add Task</button>
    </div>
    </div>
  );
};

export default AddTask;
