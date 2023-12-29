// src/components/EditTask.jsx
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api";
import "./Addtask.css"

const EditTask = () => {
  const { taskId } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Task ID from useParams:", taskId);
    const fetchTask = async () => {
      try {
        if (taskId) {
          const userId = localStorage.getItem("userId");
          const response = await api.get(`/users/${userId}/tasks/${taskId}`);
          console.log("Fetched task:", response.data);
          setTitle(response.data.title);
          setDescription(response.data.description);
        }
      } catch (error) {
        console.error("Error fetching task:", error.message);
      }
    };

    fetchTask();
  }, [taskId]);

  const handleEditTask = async () => {
    try {
      if (taskId) {
        console.log("Editing task with ID:", taskId);
        await api.put(`/tasks/${taskId}`, { title, description });
        navigate("/task-page");
      }
    } catch (error) {
      console.error("Error editing task:", error.message);
    }
  };

  if (!taskId) {
    return <div>No task ID provided</div>;
  }

  return (
    <div className="body">
    <div className="adding">
      <h2 className="h2">Edit Task</h2>
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
      <button className="addtask"onClick={handleEditTask}>Save Changes</button>
    </div>
    </div>
  );
};

export default EditTask;
